package com.example.Models;

import jakarta.persistence.*;

import java.util.Date;
@Entity
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String status;
    private Date date;
    private String description;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // The user who requested the service

    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private Service service; // The specific service being requested

    @ManyToOne
    @JoinColumn(name = "service_provider_id", nullable = false)
    private ServiceProvider serviceProvider;
}
