package com.example.backend.service;

import com.example.backend.email.EmailValidator;
import com.example.backend.model.appuser.AppUser;
import com.example.backend.model.appuser.AppUserRole;
import com.example.backend.registration.LogInRequest;
import com.example.backend.registration.SignUpRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final AppUserService appUserService;
    private final EmailValidator emailValidator;

    public String register(SignUpRequest request) {
        boolean isValidEmail = emailValidator.test(request.email());
        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        return appUserService.signUpUser(new AppUser(request.firstName(), request.lastName(), request.email(), request.password(), AppUserRole.USER));
    }

    public String logIn(LogInRequest request) {
        return appUserService.logInUser(request.email(), request.password());
    }
}
