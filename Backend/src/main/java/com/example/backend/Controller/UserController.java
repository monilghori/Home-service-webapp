package com.example.backend.Controller;

import com.example.backend.Models.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class UserController {
    UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    List<User> findAll(){ return userService.findAll();}

    @PostMapping(value = "/register")
    public ResponseEntity addUser(@RequestBody User user){
        user = userService.addUser(user);
        return ResponseEntity.ok(user);
    }
    @PostMapping(value = "/login")
    public ResponseEntity verifyUser(@RequestBody User user){
        return userService.verifyUser(user);
    }
}
