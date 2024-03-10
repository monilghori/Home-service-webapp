package com.example.backend.Repository;

import com.example.backend.Models.Request;
import com.example.backend.Models.ServiceProvider;
import com.example.backend.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request,Integer> {

    @Query("select request from Request request where request.user.id = :id")
    List<Request> findAllByUserId(int  id);
    @Query("select request from Request request where request.serviceProvider.id = :id")
    List<Request> findAllByServiceProviderId(int  id);

    @Query("select request from Request request where request.id = :id")
    Request findById(int  id);
}
