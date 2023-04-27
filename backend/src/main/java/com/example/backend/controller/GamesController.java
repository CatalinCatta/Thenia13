package com.example.backend.controller;

import com.example.backend.model.Game;
import com.example.backend.repositories.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/games")
public class GamesController {

    private final GameRepository gameRepository;

    @GetMapping
    public List<Game> allGames() {
        return gameRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Game> gameById(@PathVariable long id) {
        return gameRepository.findById(id);
    }
}