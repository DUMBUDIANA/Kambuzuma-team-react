import React, { useState, useEffect } from 'react';

const BookingManagementPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    hostId: '',
    vanId: '',
    startDate: '',
    endDate: '',
    totalPrice: '',
  });

  useEffect(() => {
    // Fetch bookings from API
    // This is a placeholder and should be replaced with actual API call
    const fetchBookings = async () => {
     
    };

    fetchBookings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
    setFormData({ userId: '', hostId: '', vanId: '', startDate: '', endDate: '', totalPrice: '' });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Vans Booking</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Create New Booking</h2>
        <div>
          <label htmlFor="userId" className="block mb-1">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="vanId" className="block mb-1">Van ID:</label>
          <input
            type="text"
            id="vanId"
            name="vanId"
            value={formData.vanId}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block mb-1">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-1">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="totalPrice" className="block mb-1">Total Price:</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Booking
        </button>
      </form>
    </>
  );
};

export default BookingManagementPage;