import React from 'react';
import '../Styles/statusMessage.css'

const StatusMessage = ({ type, message }) => {
  if (!type) return null;

  return (
    <div className={`status-message ${type}`}>
      {message}
    </div>
  );
};

export default StatusMessage;
