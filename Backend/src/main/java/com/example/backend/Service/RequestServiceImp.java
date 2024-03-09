package com.example.backend.Service;

import com.example.backend.Models.Request;
import com.example.backend.Repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImp implements RequestService{
    private RequestRepository requestRepository;
    @Autowired
    public RequestServiceImp(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    @Override
    public List<Request> findAll() {
        return requestRepository.findAll();
    }
}
