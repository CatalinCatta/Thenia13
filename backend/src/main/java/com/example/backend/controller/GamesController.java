package com.example.backend.controller;

import com.example.backend.dao.GameRepository;
import com.example.backend.model.Game;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/games")
public class GamesController {

    private final GameRepository gameRepository;

    public GamesController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @PostMapping
    public List<Game> create() {
        return gameRepository.findAll();
    }
    @GetMapping
    public List<Game> allGames() {
        return gameRepository.findAll();
    }
    @DeleteMapping("/{id}")
    public List<Game> delete(@PathVariable String id) {
        return gameRepository.findAll();
    }
}