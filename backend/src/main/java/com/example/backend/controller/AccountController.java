package com.example.backend.controller;

import com.example.backend.registration.LogInRequest;
import com.example.backend.registration.SignUpRequest;
import com.example.backend.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/accounts")
public class AccountController {

    private final RegistrationService registrationService;

    @PostMapping("/signUp")
    public String signUp(@RequestBody SignUpRequest request){
        return registrationService.register(request);
    }

    @PostMapping("/logIn")
    public String logIn(@RequestBody LogInRequest request){
        return registrationService.logIn(request);
    }

}
