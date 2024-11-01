import React, { useState } from 'react';

const UploadVanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    type: '',
    color: '',
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Make sure this URL is correct and the server is running
  const apiBaseUrl = 'https://kambuzuma-vanlife-backend-production.up.railway.app';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (allowedTypes.includes(selectedImage.type)) {
        setImage(selectedImage);
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
    Object.entries(formData).forEach(([key, value]) => submitData.append(key, value));
    if (image) submitData.append('image', image);

    // Log the form data being sent
    console.log('Sending data to:', `${apiBaseUrl}/vans`);
    console.log('Form data entries:');
    for (let pair of submitData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      // First, try a test request to check if the server is reachable
      const testResponse = await fetch(apiBaseUrl, {
        method: 'GET',
        mode: 'cors',
      }).catch(error => {
        console.log('Test request failed:', error);
        throw new Error('Cannot connect to server. Please check if the server is running.');
      });

      // If test request succeeds, proceed with the actual upload
      const response = await fetch(`${apiBaseUrl}/vans`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        },
        body: submitData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Success response:', responseData);
      setMessage('Van uploaded successfully!');
      setFormData({ name: '', description: '', price: '', type: '', color: '' });
      setImage(null);
    } catch (error) {
      console.error('Detailed error:', error);
      setMessage(error.message || 'Upload failed. Please check console for details.');
      
      // Additional error information
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        setMessage('Cannot connect to server. Please check:\n' +
          '1. If the server URL is correct\n' +
          '2. If the server is running\n' +
          '3. If there are any network connectivity issues');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {message && (
        <div className={`mb-4 p-2 rounded whitespace-pre-line ${
          message.includes('failed') || message.includes('Cannot connect') 
            ? 'text-red-500 bg-red-100' 
            : 'text-green-500 bg-green-100'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'description', 'price', 'type', 'color'].map((field) => (
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
          <label className="mb-1">Image:</label>
          <input
            type="file"
            accept="image/*"
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