package com.example.Models;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;
    private String gender;
    private String address;
    @OneToMany(mappedBy = "user")
    private Set<Request> requests = new HashSet<>();
}
