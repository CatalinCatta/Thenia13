package com.example.backend.controller;

import com.example.backend.model.Game;
import com.example.backend.model.Update;
import org.springframework.web.bind.annotation.*;

import javax.management.Descriptor;
import java.util.*;

@RestController
@RequestMapping("games")
public class GamesController {

    public GamesController() {}

    @GetMapping("/all")
    public List<Game> AllGames() {
        var game = new Game();
        game.Id = 0;
        game.Name = "Test";
        game.Description = "Test description";
        game.Done.addAll(Arrays.asList("------", "------", "------"));
        game.InProgress.addAll(Arrays.asList("------", "------", "------"));
        game.SomeIdeas.addAll(Arrays.asList("Nothing yet", "Nothing yet"));
        game.Future.add("The Game");
        game.StartingDate = new Date();

        return List.of(game);
    }

    @GetMapping("/{gameId}")
    public Game Game(@PathVariable int gameId) {
        var game = new Game();
        game.Id = gameId;
        game.Name = "Test";
        game.Description = "Test description";
        game.Done.addAll(Arrays.asList("------", "------", "------"));
        game.InProgress.addAll(Arrays.asList("------", "------", "------"));
        game.SomeIdeas.addAll(Arrays.asList("Nothing yet", "Nothing yet"));
        game.Future.add("The Game");
        game.StartingDate = new Date();

        return game;
    }

    @GetMapping("/{gameId}/updates")
    public List<Update> Updates(@PathVariable int gameId) {
        var update = new Update();
        update.Id = 0;
        update.GameId = gameId;
        update.Name = "Test";
        update.Version = 0.01;
        update.Description = "Test Description";
        update.PatchNote.addAll(Arrays.asList("Nothing", "Nothing"));
        update.Date = new Date();

        return List.of(update, update);
    }

}