package com.example.backend.dao;

import com.example.backend.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UpdateRepository extends JpaRepository<Game, Long> {
}
