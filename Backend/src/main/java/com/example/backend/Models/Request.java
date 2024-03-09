package com.example.backend.Models;

import com.example.backend.Models.Service;
import com.example.backend.Models.ServiceProvider;
import com.example.backend.Models.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.Future;

import java.util.Date;
@Entity
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String status  = "Pending";
//    @Future(message = "The event date must be in the future")
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

    public Request() {
    }

    public Request(String status, Date date, String description, User user, Service service, ServiceProvider serviceProvider) {
        this.status = status;
        this.date = date;
        this.description = description;
        this.user = user;
        this.service = service;
        this.serviceProvider = serviceProvider;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public ServiceProvider getServiceProvider() {
        return serviceProvider;
    }

    public void setServiceProvider(ServiceProvider serviceProvider) {
        this.serviceProvider = serviceProvider;
    }
}
