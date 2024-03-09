package com.example.backend.Repository;

import com.example.backend.Models.ServiceProvider;
import com.example.backend.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Integer> {
    @Query("select serviceProvider from ServiceProvider serviceProvider where serviceProvider.email = :email")
    ServiceProvider findByEmail(String email);
    @Query("select serviceProvider from ServiceProvider serviceProvider where serviceProvider.id = :id")
    public ServiceProvider findById(int id);
}
