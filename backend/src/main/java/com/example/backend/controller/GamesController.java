package com.example.backend.controller;

import com.example.backend.model.Game;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("games")
public class GamesController {

    public GamesController() {}

    @GetMapping("/all")
    public List<Game> allGames() {
        var game = new Game();
        game.id = 1;
        game.name = "Galactic Odyssey";
        game.description = "In Galactic Odyssey, you are the captain of a starship exploring the vast expanse of the universe. Discover new planets, encounter strange alien species, and engage in epic space battles as you chart a course through the stars.";
        game.startingDate = new Date();

        var game2 = new Game();
        game2.id = 2;
        game2.name = "Shadow Realms";
        game2.description = "In Shadow Realms, you play as a member of a team of powerful magic users who must work together to battle supernatural threats and uncover the mysteries of a dark, mystical world.";
        game2.startingDate = new Date();

        return List.of(game, game2);
    }

    @GetMapping("/{gameId}")
    public Game game(@PathVariable int gameId) {
        var game = new Game();
        switch (gameId){
            case 1:
                game.id = 1;
                game.name = "Galactic Odyssey";
                game.description = "In Galactic Odyssey, you are the captain of a starship exploring the vast expanse of the universe. Discover new planets, encounter strange alien species, and engage in epic space battles as you chart a course through the stars.";
                game.startingDate = new Date();

            case 2:
                game.id = 2;
                game.name = "Shadow Realms";
                game.description = "In Shadow Realms, you play as a member of a team of powerful magic users who must work together to battle supernatural threats and uncover the mysteries of a dark, mystical world.";
                game.startingDate = new Date();
        }
        return game;
    }

}