package com.example.backend.Service;

import com.example.backend.Models.Request;

import java.util.List;

public interface RequestService {
    public List<Request> findAll();
    public Request createRequest(Request request);
    public List<Request> findAllByUserId(int id);
    public List<Request> findAllByServiceProviderId(int id);
    public Request updateRequest(int id , Request request);
}
