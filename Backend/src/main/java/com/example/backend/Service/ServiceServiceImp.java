package com.example.backend.Service;

import com.example.backend.Models.Service;
import com.example.backend.Repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class ServiceServiceImp implements ServiceService{
    ServiceRepository serviceRepository;
    @Autowired
    public ServiceServiceImp(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public Service getService(String name) {
        return serviceRepository.findByName(name);
    }
}
