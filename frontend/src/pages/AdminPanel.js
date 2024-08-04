import React, { useState } from 'react';
import api from '../services/api';
import './AdminPanel.css'; // Import the CSS file

const AdminPanel = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tracking', { trackingNumber, status, location });
      alert('Tracking information added');
    } catch (error) {
      alert('Failed to add tracking information');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/tracking/${trackingNumber}`, { status, location });
      alert('Tracking information updated');
    } catch (error) {
      alert('Failed to update tracking information');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await api.delete(`/tracking/${trackingNumber}`);
      alert('Tracking information deleted');
    } catch (error) {
      alert('Failed to delete tracking information');
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <form className="admin-form" onSubmit={handleAdd}>
        <input 
          type="text" 
          placeholder="Tracking Number" 
          value={trackingNumber} 
          onChange={(e) => setTrackingNumber(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Status" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required
        />
        <button type="submit">Add</button>
      </form>
      <form className="admin-form" onSubmit={handleUpdate}>
        <input 
          type="text" 
          placeholder="Tracking Number" 
          value={trackingNumber} 
          onChange={(e) => setTrackingNumber(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Status" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required
        />
        <button type="submit">Update</button>
      </form>
      <form className="admin-form" onSubmit={handleDelete}>
        <input 
          type="text" 
          placeholder="Tracking Number" 
          value={trackingNumber} 
          onChange={(e) => setTrackingNumber(e.target.value)} 
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default AdminPanel;
