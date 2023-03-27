package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("games")
public class GamesController {

    public GamesController() {
    }

    @GetMapping
    public String test() {
        return "test";
    }

}