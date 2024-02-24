import React, { useState } from 'react';
import './Request.css';

const Request = ({ request, isExpanded, onToggleDescription, onStatusChange }) => {
    const [editStatus, setEditStatus] = useState(false);
  
    const getStatusClass = (status) => `request-status ${status.toLowerCase()}`;
  
    return (
      <div className="request-item" onClick={onToggleDescription}>
        <div className="request-header">
          <div className="request-type"><b>Type : </b>{request.type}</div>
          <div className={getStatusClass(request.status)} onClick={(e) => {
            e.stopPropagation(); // Prevent the description toggle from being triggered
            setEditStatus(true); // Enter edit mode for status
          }}>
            {editStatus ? (
              <select
                defaultValue={request.status}
                onChange={(e) => {
                  onStatusChange(e.target.value);
                  setEditStatus(false); // Exit edit mode after selection
                }}
                onBlur={() => setEditStatus(false)} // Exit edit mode on blur
                autoFocus // Automatically focus the select to enable immediate editing
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            ) : request.status}
          </div>
        </div>
        {isExpanded && (
          <div className="request-description"><b>Description : </b>{request.description}</div>
        )}
      </div>
    );
  };
  
  export default Request;
