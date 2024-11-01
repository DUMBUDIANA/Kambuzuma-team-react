import React, { useState } from 'react';

const UploadVanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    type: { button: '', color: '' }, // Nested object for type
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const apiBaseUrl = 'https://kambuzuma-vanlife-backend-production.up.railway.app';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Check if the input name is for the type object
    if (name.startsWith('type.')) {
      const key = name.split('.')[1]; // Get the key (button or color)
      setFormData(prev => ({
        ...prev,
        type: { ...prev.type, [key]: value }, // Update the type object
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
        // Append the type object properties separately
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

    // Log the form data being sent
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

      // Log the full response for debugging
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      let responseData;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
        console.log('Response data:', responseData);
      } else {
        const textResponse = await response.text();
        console.log('Raw response:', textResponse);
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
      setFormData({ name: '', description: '', price: '', type: { button: '', color: '' } }); // Reset to initial state
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
          <input
            type="text"
            name="type.button"
            value={formData.type.button}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Color:</label>
          <input
            type="text"
            name="type.color"
            value={formData.type.color}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
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
