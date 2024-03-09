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


    public Service() {
    }

    public Service(String name) {
        this.name = name;

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

}
