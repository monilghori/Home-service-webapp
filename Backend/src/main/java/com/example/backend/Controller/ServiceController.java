package com.example.backend.Controller;


import com.example.backend.Models.Service;
import com.example.backend.Service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/service")
public class ServiceController {
    ServiceService service;
    @Autowired
    public ServiceController(ServiceService service) {
        this.service = service;
    }

    @GetMapping("/{name}")
    Service getService(@PathVariable String name)
    {
        return service.getService(name);
    }
}
