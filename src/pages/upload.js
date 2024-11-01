import React, { useState } from 'react';

const UploadVanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    type: { button: '', color: '' },
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const apiBaseUrl = 'https://kambuzuma-vanlife-backend-production.up.railway.app';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('type.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        type: { ...prev.type, [key]: value },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'price' ? parseFloat(value) : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (allowedTypes.includes(selectedImage.type)) {
        setImage(selectedImage);
        console.log('Selected image:', selectedImage.name, 'Size:', selectedImage.size, 'Type:', selectedImage.type);
      } else {
        setMessage('Please select a valid image file (JPEG or PNG).');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'type') {
        Object.entries(value).forEach(([typeKey, typeValue]) => {
          submitData.append(`type.${typeKey}`, typeValue);
        });
      } else {
        if (value) {
          submitData.append(key, value);
        }
      }
    });

    if (image) {
      submitData.append('image', image);
    }

    console.log('Sending data to:', `${apiBaseUrl}/vans`);
    console.log('Form data entries:');
    for (let pair of submitData.entries()) {
      console.log(pair[0], ':', typeof pair[1], ':', pair[1]);
    }

    try {
      const response = await fetch(`${apiBaseUrl}/vans`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: submitData,
      });

      const contentType = response.headers.get('content-type');
      let responseData;

      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        const textResponse = await response.text();
        try {
          responseData = JSON.parse(textResponse);
        } catch (e) {
          responseData = { message: textResponse };
        }
      }

      if (!response.ok) {
        throw new Error(responseData.message || `Server error: ${response.status}`);
      }

      setMessage('Van uploaded successfully!');
      setFormData({ name: '', description: '', price: '', type: { button: '', color: '' } });
      setImage(null);
    } catch (error) {
      console.error('Upload error details:', error);
      
      let errorMessage = 'Upload failed: ';
      if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
        errorMessage += 'Connection failed. Please check your internet connection.';
      } else if (error.message.includes('500')) {
        errorMessage += 'Server error. Please try again later or contact support.';
      } else {
        errorMessage += error.message;
      }

      // Check for specific response errors
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message; // Use the server's error message
      }

      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {message && (
        <div className={`mb-4 p-2 rounded whitespace-pre-line ${
          message.includes('failed') || message.includes('error') 
            ? 'text-red-500 bg-red-100' 
            : 'text-green-500 bg-green-100'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'description', 'price'].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            {field === 'description' ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
            ) : (
              <input
                type={field === 'price' ? 'number' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
                min={field === 'price' ? '0' : undefined}
                step={field === 'price' ? '0.01' : undefined}
              />
            )}
          </div>
        ))}

        <div className="flex flex-col">
          <label className="mb-1">Type Button:</label>
          <select
            name="type.button"
            value={formData.type.button}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          >
            <option value="" disabled>Select Button Type</option>
            <option value="rugged">Rugged</option>
            <option value="luxury">Luxury</option>
            <option value="simple">Simple</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Color:</label>
          <select
            name="type.color"
            value={formData.type.color}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          >
            <option value="" disabled>Select Color</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Image:</label>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleImageChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? <span>Loading...</span> : 'Upload Van'}
        </button>
      </form>
    </div>
  );
};

export default UploadVanForm;
