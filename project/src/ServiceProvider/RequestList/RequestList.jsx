import React, { useState } from 'react';
import './RequestList.css';
import Request from '../Request/Request';

const RequestList = () => {
  
  const [requests, setRequests] = useState([ // Initialize requests state
  {
    type: "Technical Support",
    status: "Pending",
    description: "The user reports an issue with logging into their account despite entering the correct credentials."
  },
  {
    type: "Feature Request",
    status: "Approved",
    description: "Request to add a dark mode feature to the application for better nighttime usability."
  },
  {
    type: "Bug Report",
    status: "Rejected",
    description: "Submission of a bug where user profiles were not saving updated information, but it was due to user error."
  },
  {
    type: "Account Inquiry",
    status: "Pending",
    description: "A question regarding billing cycles and how to change payment methods."
  },
  {
    type: "Feedback",
    status: "Approved",
    description: "Positive feedback on the new user interface update and suggestions for further improvements."
  }
]);
const [expandedRequestId, setExpandedRequestId] = useState(null);

  const toggleDescription = (index) => {
    if (expandedRequestId === index) {
      setExpandedRequestId(null);
    } else {
      setExpandedRequestId(index);
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedRequests = requests.map((request, reqIndex) =>
      reqIndex === index ? { ...request, status: newStatus } : request
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="request-list">
      {requests.map((request, index) => (
        <Request
          key={index}
          request={request}
          isExpanded={expandedRequestId === index}
          onToggleDescription={() => toggleDescription(index)}
          onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
        />
      ))}
    </div>
  );
};

export default RequestList;
