package com.example.backend.Service;

import com.example.backend.Models.Request;
import com.example.backend.Models.ServiceProvider;
import com.example.backend.Models.User;
import com.example.backend.Repository.RequestRepository;
import com.example.backend.Repository.ServiceProviderRepository;
import com.example.backend.Repository.ServiceRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImp implements RequestService{
    private RequestRepository requestRepository;
    private UserRepository userRepository;
    private ServiceProviderRepository serviceProviderRepository;
    private ServiceRepository serviceRepository;
    @Autowired
    public RequestServiceImp(RequestRepository requestRepository, UserRepository userRepository, ServiceProviderRepository serviceProviderRepository, ServiceRepository serviceRepository) {
        this.requestRepository = requestRepository;
        this.userRepository = userRepository;
        this.serviceProviderRepository = serviceProviderRepository;
        this.serviceRepository = serviceRepository;
    }

    @Override
    public List<Request> findAll() {
        return requestRepository.findAll();
    }

    @Override
    public Request createRequest(Request request) {
        User user = userRepository.findById(request.getUser().getId());
        com.example.backend.Models.Service service = serviceRepository.findById(request.getService().getId());
        ServiceProvider serviceProvider = serviceProviderRepository.findById(request.getServiceProvider().getId());
        request.setUser(user);
        request.setService(service);
        request.setServiceProvider(serviceProvider);
        requestRepository.save(request);
        return request;
    }
}
