package com.example.Models;

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
}
