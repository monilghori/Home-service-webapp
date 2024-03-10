import React, { useState } from 'react';
import './Request.css';

const Request = ({ request, isExpanded, onToggleDescription, onStatusChange,edit }) => {
    const [editStatus, setEditStatus] = useState(false);

    const handleClick = (e) => {
      if(edit)
      {
        e.stopPropagation(); 
        setEditStatus(true);
      }else{}
    }
  
    const getStatusClass = (status) => `request-status ${status.toLowerCase()}`;
  
    return (
      <div className="request-item" onClick={onToggleDescription}>
        {edit ? (<div><b>Customer Name :  </b>{request.user.name}</div>):
        ( <div><b>Service Provider :  </b>{request.serviceProvider.name}</div>)}
        <div className="request-header">
          <div className="request-type"><b>Type : </b>{request.service.name}</div>
          <div className={getStatusClass(request.status)} onClick={handleClick}>
            {editStatus ? (
              <select
                defaultValue={request.status}
                onChange={(e) => {
                  onStatusChange(e.target.value);
                  setEditStatus(false); 
                }}
                onBlur={() => setEditStatus(false)}
                autoFocus 
              >
                <option value="Pending">Pending</option>
                <option value="Inprogress">Inprogress</option>
                <option value="Completed">Completed</option>
                
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
