package com.example.backend.controller;

import com.example.backend.model.Game;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("games")
public class GamesController {

    public GamesController() {}

    @GetMapping("/all")
    public List<Game> AllGames() {
        var game = new Game();
        game.Id = 1;
        game.Name = "Galactic Odyssey";
        game.Description = "In Galactic Odyssey, you are the captain of a starship exploring the vast expanse of the universe. Discover new planets, encounter strange alien species, and engage in epic space battles as you chart a course through the stars.";
        game.StartingDate = new Date();

        var game2 = new Game();
        game2.Id = 2;
        game2.Name = "Shadow Realms";
        game2.Description = "In Shadow Realms, you play as a member of a team of powerful magic users who must work together to battle supernatural threats and uncover the mysteries of a dark, mystical world.";
        game2.StartingDate = new Date();

        return List.of(game, game2);
    }

    @GetMapping("/{gameId}")
    public Game Game(@PathVariable int gameId) {
        var game = new Game();
        switch (gameId){
            case 1:
                game.Id = 1;
                game.Name = "Galactic Odyssey";
                game.Description = "In Galactic Odyssey, you are the captain of a starship exploring the vast expanse of the universe. Discover new planets, encounter strange alien species, and engage in epic space battles as you chart a course through the stars.";
                game.StartingDate = new Date();

            case 2:
                game.Id = 2;
                game.Name = "Shadow Realms";
                game.Description = "In Shadow Realms, you play as a member of a team of powerful magic users who must work together to battle supernatural threats and uncover the mysteries of a dark, mystical world.";
                game.StartingDate = new Date();
        }
        return game;
    }

}