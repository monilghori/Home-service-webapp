package com.example.backend.Repository;

import com.example.backend.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select user from User user where user.email = :email")
    User findByEmail(String email);
    @Query("select user from User user where user.id = :id")
    User findById(int id);
}
