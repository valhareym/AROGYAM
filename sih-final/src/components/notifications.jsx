import React from 'react';
import './Notifications.css';

const Notifications = () => {
  return (
    <div className="container">
      <div className="content text-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <p className="mt-4">
          A call will be initiated with a general Doctor/Consultant, and an ambulance has been dispatched from the nearest location.
        </p>
        {/* Add additional notification content here */}
      </div>
    </div>
  );
};

export default Notifications;