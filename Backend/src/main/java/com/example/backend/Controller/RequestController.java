package com.example.backend.Controller;

import com.example.backend.Models.Request;
import com.example.backend.Service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/request")
public class RequestController {

    private RequestService requestService;
    @Autowired
    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping("/requests")
    List<Request> findAll(){
        return requestService.findAll();
    }

    @PostMapping("/create")
    Request createRequest(Request request)
    {
        return requestService.createRequest(request);
    }
}
