package com.example.backend.Controller;

import com.example.backend.Models.ServiceProvider;
import com.example.backend.Models.User;
import com.example.backend.Service.ServiceProviderService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/serviceprovider")
public class ServiceProviderController {

    ServiceProviderService serviceProviderService;
    @Autowired
    public ServiceProviderController(ServiceProviderService serviceProviderService) {
        this.serviceProviderService = serviceProviderService;
    }

    @GetMapping("/serviceproviders")
    List<ServiceProvider> findAll(){ return serviceProviderService.findAll();}

    @PostMapping(value = "/register")
    public ResponseEntity addUser(@RequestBody ServiceProvider serviceProvider){
        System.out.println("called");
        System.out.println(serviceProvider.getServices());
        serviceProvider = serviceProviderService.addUser(serviceProvider);
        return ResponseEntity.ok(serviceProvider);
    }
    @PostMapping(value = "/login")
    public ResponseEntity verifyUser(@RequestBody ServiceProvider serviceProvider){
        return serviceProviderService.verifyServiceProvider(serviceProvider);
    }
    @GetMapping("/{id}")
    public ResponseEntity getServiceProvider(@PathVariable int id)
    {
        ServiceProvider serviceProvider= serviceProviderService.getServiceProvider(id);
        return ResponseEntity.ok(serviceProvider);
    }
}
