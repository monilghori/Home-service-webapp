package com.example.backend.Repository;

import com.example.backend.Models.Service;
import com.example.backend.Models.ServiceProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ServiceRepository extends JpaRepository<Service,Integer> {
    @Query("select service from Service service where service.name = :name")
    Service findByName(String name);
    @Query("select service from Service service where service.id = :id")
    public Service findById(int id);
}
