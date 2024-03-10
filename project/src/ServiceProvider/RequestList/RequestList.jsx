import React, { useState, useEffect } from "react";
import "./RequestList.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Request from "../Request/Request";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [expandedRequestId, setExpandedRequestId] = useState(null);
  const [authUser, setAuthUser] = useState(null); // useState for authUser
  const [provider, setProvider] = useState(null); // useState for provider
  const fetchData = async () => {
    const storedAuthUser = JSON.parse(localStorage.getItem("user"));
    const storedProvider = JSON.parse(localStorage.getItem("provider"));

    setAuthUser(storedAuthUser);
    setProvider(storedProvider);

    if (storedAuthUser) {
      try {
        const res = await axios.get(
          `http://localhost:9090/api/request/requests/user/${storedAuthUser.id}`
        );
        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    } else if (storedProvider) {
      try {
        const res = await axios.get(
          `http://localhost:9090/api/request/requests/serviceprovider/${storedProvider.id}`
        );
        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please login first");
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  const toggleDescription = (index) => {
    setExpandedRequestId(expandedRequestId === index ? null : index);
  };

  const handleStatusChange = async (id, newStatus) => {
    console.log(newStatus);

    const request = { status: newStatus };
    console.log(request);

    const res = await axios
      .patch(`http://localhost:9090/api/request/update/${id}`, request)
      .then((res) => {
        fetchData();
        toast.success("Change Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      })
      .catch((err) => {
        toast.error("Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      });
  };

  return (
    <div className="request-list">
      {requests.length === 0 ? (
        <div className="error-message">There are no requests.</div>
      ) : null}
      {requests.map((request, index) => (
        <Request
          key={index}
          request={request}
          isExpanded={expandedRequestId === index}
          onToggleDescription={() => toggleDescription(index)}
          onStatusChange={
            provider
              ? (newStatus) => handleStatusChange(request.id, newStatus)
              : undefined
          }
          edit={provider != null}
        />
      ))}
    </div>
  );
};

export default RequestList;
