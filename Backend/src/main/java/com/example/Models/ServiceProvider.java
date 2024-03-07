package com.example.Models;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;
@Entity
public class ServiceProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;
    @ManyToMany
    @JoinTable(
            name = "provider_service",
            joinColumns = @JoinColumn(name = "service_provider_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id")
    )
    private Set<Service> services = new HashSet<>();
}
