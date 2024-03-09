package com.example.backend.Service;

import com.example.backend.Models.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Boolean.FALSE;
import static java.lang.Boolean.TRUE;

@Service
public class UserServiceImp implements UserService{
    private UserRepository userRepository;
    @Autowired
    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        if(checkUser(user.getEmail()))
        {
           return null;
        }else{
            userRepository.save(user);
        }

        return user;
    }

    @Override
    public ResponseEntity verifyUser(User user){
        User check = userRepository.findByEmail(user.getEmail());
        if(check == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not found");

        if(check.getPassword().equals(user.getPassword()))
            return ResponseEntity.ok(check);
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Credential is not matched");
    }

    @Override
    public boolean checkUser(String email) {
        User check = userRepository.findByEmail(email);
        if(check == null){
            return FALSE;
        }
        else {
            return TRUE;
        }
    }

}
