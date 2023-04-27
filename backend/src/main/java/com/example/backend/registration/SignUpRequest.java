package com.example.backend.registration;

public record SignUpRequest(String firstName, String lastName, String email, String password) {
}
