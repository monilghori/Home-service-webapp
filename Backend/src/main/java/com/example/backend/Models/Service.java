package com.example.backend.Models;

import com.example.backend.Models.ServiceProvider;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;
@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @ManyToMany(mappedBy = "services")
    private Set<ServiceProvider> serviceProviders = new HashSet<>();

    public Service() {
    }

    public Service(String name, Set<ServiceProvider> serviceProviders) {
        this.name = name;
        this.serviceProviders = serviceProviders;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ServiceProvider> getServiceProviders() {
        return serviceProviders;
    }

    public void setServiceProviders(Set<ServiceProvider> serviceProviders) {
        this.serviceProviders = serviceProviders;
    }
}
