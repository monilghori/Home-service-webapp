package com.example.backend.Controller;

import com.example.backend.Models.Request;
import com.example.backend.Service.RequestService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/request")
public class RequestController {

    private RequestService requestService;
    @Autowired
    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/requests/user/{id}")
    List<Request> findAllForUser(@PathVariable int id){
        return requestService.findAllByUserId(id);
    }
    @GetMapping("/requests/serviceprovider/{id}")
    List<Request> findAllForServiceProvider(@PathVariable int id){
        return requestService.findAllByServiceProviderId(id);
    }

    @PostMapping("/create")
    ResponseEntity createRequest(@RequestBody Request request)
    {
//        System.out.println(bindingResult.);
//        if(bindingResult.hasErrors())
//        {
//            Map<String, String> errors = new HashMap<>();
//            for (FieldError error : bindingResult.getFieldErrors()) {
//                errors.put(error.getField(), error.getDefaultMessage());
//            }
//            System.out.println(errors);
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
//        }
        Request r = requestService.createRequest(request);
        return ResponseEntity.ok(r);
    }
    @PatchMapping("/update/{id}")
    Request updateRequest(@PathVariable int id ,@RequestBody Request request)
    {
        return requestService.updateRequest(id,request);
    }
}
