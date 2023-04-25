package com.example.backend.controller;

import com.example.backend.repositories.GameRepository;
import com.example.backend.model.Game;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/games")
public class GamesController {

    private final GameRepository gameRepository;

    public GamesController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @GetMapping
    public List<Game> allGames() {
        return gameRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Game> gameById(@PathVariable long id) {
        return gameRepository.findById(id);
    }
}