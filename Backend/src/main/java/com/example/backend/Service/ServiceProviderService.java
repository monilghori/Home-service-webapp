package com.example.backend.Service;

import com.example.backend.Models.ServiceProvider;
import com.example.backend.Models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ServiceProviderService {
    public List<ServiceProvider> findAll();

    public ServiceProvider addUser(ServiceProvider serviceProvider);
    public ResponseEntity verifyServiceProvider(ServiceProvider serviceProvider);

    public boolean checkServiceProvider(String email);

    public ServiceProvider getServiceProvider(int id);

}
