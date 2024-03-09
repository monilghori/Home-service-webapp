package com.example.backend.Service;

import com.example.backend.Models.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    public List<User> findAll();

    public User addUser(User user);
    public ResponseEntity verifyUser(User user);
    public boolean checkUser(String email);

}
