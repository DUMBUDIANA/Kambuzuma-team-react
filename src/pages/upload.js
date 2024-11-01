import React, { useState } from 'react';

const UploadVanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    type: 'rugged', // Default to 'rugged'
    color: 'red',   // Default to red
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const apiBaseUrl = 'https://kambuzuma-vanlife-backend-production.up.railway.app';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
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
      submitData.append(key, value);
    });
    
    if (image) {
      submitData.append('image', image);
    }

    try {
      const response = await fetch(`${apiBaseUrl}/vans`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: submitData,
      });

      let responseData;
      const contentType = response.headers.get('content-type');
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
      setFormData({ name: '', description: '', price: '', type: 'rugged', color: 'red' }); // Reset to initial state
      setImage(null);
    } catch (error) {
      console.error('Upload error details:', error);
      setMessage('Upload failed: ' + error.message);
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
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          >
            <option value="rugged">Rugged</option>
            <option value="luxury">Luxury</option>
            <option value="simple">Simple</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Color:</label>
          <select
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          >
            {formData.type === 'rugged' && (
              <>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </>
            )}
            {formData.type === 'luxury' && (
              <>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="black">Black</option>
              </>
            )}
            {formData.type === 'simple' && (
              <>
                <option value="white">White</option>
                <option value="grey">Grey</option>
                <option value="beige">Beige</option>
              </>
            )}
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
