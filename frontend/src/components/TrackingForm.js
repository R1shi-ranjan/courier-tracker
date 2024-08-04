import React, { useState } from 'react';
import axios from 'axios';
import './TrackingForm.css'; // Make sure to import the CSS file

const TrackingForm = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);
    const [error, setError] = useState('');

    const handleTrack = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/track/${trackingNumber}`);
            setTrackingInfo(response.data);
            setError('');
        } catch (err) {
            setTrackingInfo(null);
            if (err.response && err.response.status === 404) {
                setError('Tracking not found');
            } else {
                setError('Error retrieving tracking information');
            }
        }
    };

    return (
        <div className="tracking-container">
            <h2>Track Your Package</h2>
            <div className="tracking-form">
                <input 
                    type="text" 
                    value={trackingNumber} 
                    onChange={(e) => setTrackingNumber(e.target.value)} 
                    placeholder="Enter tracking number" 
                    required
                />
                <button onClick={handleTrack}>Track</button>
            </div>
            {trackingInfo && (
                <div className="tracking-info">
                    <p><strong>Status:</strong> {trackingInfo.status}</p>
                    <p><strong>Location:</strong> {trackingInfo.location}</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default TrackingForm;
