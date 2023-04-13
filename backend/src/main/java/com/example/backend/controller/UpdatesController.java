package com.example.backend.controller;

import com.example.backend.dao.GameRepository;
import com.example.backend.dao.UpdateRepository;
import com.example.backend.model.Game;
import com.example.backend.model.Update;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

//@CrossOrigin
@RestController
@RequestMapping("api/updates")
public class UpdatesController {

    private final UpdateRepository updateRepository;

    public UpdatesController(UpdateRepository updateRepository) {
        this.updateRepository = updateRepository;
    }

    @GetMapping("/page/{id}")
    public List<Update> getListOnPage(@PathVariable int id) {
        return updateRepository.findAll(PageRequest.of(id-1,5,   Sort.by("date"))).getContent();
    }
    @GetMapping("/game/{id}")
    public List<Update> getListOnGame(@PathVariable long id) {
        return updateRepository.findAllByGameId(id);
    }
    @GetMapping("/{id}")
    public Optional<Update> updateById(@PathVariable long id) {
        return updateRepository.findById(id);
    }
}
