package com.example.backend.controller;

import com.example.backend.registration.LogInRequest;
import com.example.backend.registration.SignUpRequest;
import com.example.backend.repositories.AppUserRepository;
import com.example.backend.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/accounts")
public class AccountController {

    private final RegistrationService registrationService;
    private final AppUserRepository appUserRepository;

    @PostMapping("/signUp")
        public String signUp(@RequestBody SignUpRequest request){
        return registrationService.register(request);
    }

    @PostMapping("/logIn")
    public List<Serializable> logIn(@RequestBody LogInRequest request){
        return List.of(registrationService.logIn(request), appUserRepository.findByEmail(request.email()).get());
    }

}
