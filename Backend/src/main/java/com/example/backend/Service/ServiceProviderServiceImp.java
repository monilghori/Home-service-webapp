package com.example.backend.Service;

import com.example.backend.Models.Service;
import com.example.backend.Models.ServiceProvider;
import com.example.backend.Repository.ServiceProviderRepository;
import com.example.backend.Repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.lang.Boolean.FALSE;
import static java.lang.Boolean.TRUE;

@org.springframework.stereotype.Service
public class ServiceProviderServiceImp implements ServiceProviderService{
    ServiceProviderRepository serviceProviderRepository;

    ServiceRepository serviceRepository;
    @Autowired
    public ServiceProviderServiceImp(ServiceProviderRepository serviceProviderRepository, ServiceRepository serviceRepository) {
        this.serviceProviderRepository = serviceProviderRepository;
        this.serviceRepository = serviceRepository;
    }

    @Override
    public List<ServiceProvider> findAll() {
        return serviceProviderRepository.findAll();
    }

    @Override
    public ServiceProvider addUser(ServiceProvider serviceProvider) {
        if(checkServiceProvider(serviceProvider.getEmail()))
        {
            return null;
        }
        else{
            Set<Service> services = new HashSet<>();
            for (Service s : serviceProvider.getServices()) {
                Service service = serviceRepository.findByName(s.getName());
                if (service != null) {
                    services.add(service);
                }
            }
            serviceProvider.setServices(services);
            serviceProviderRepository.save(serviceProvider);
        }
        return serviceProvider;
    }

    @Override
    public ResponseEntity verifyServiceProvider(ServiceProvider serviceProvider) {
        ServiceProvider check = serviceProviderRepository.findByEmail(serviceProvider.getEmail());
        if(check == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not found");

        if(check.getPassword().equals(serviceProvider.getPassword()))
            return ResponseEntity.ok(check);
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Credential is not matched");
    }

    @Override
    public boolean checkServiceProvider(String email) {
        ServiceProvider serviceProvider = serviceProviderRepository.findByEmail(email);
        if(serviceProvider == null)
        {
            return FALSE;
        }
        return TRUE;
    }

    @Override
    public ServiceProvider getServiceProvider(int id) {
        return serviceProviderRepository.findById(id);
    }

}
