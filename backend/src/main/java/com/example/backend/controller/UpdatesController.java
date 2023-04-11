package com.example.backend.controller;

import com.example.backend.dao.GameRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin
@RequestMapping("updates")
public class UpdatesController {

    private final GameRepository gameRepository;

    public UpdatesController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }
}
