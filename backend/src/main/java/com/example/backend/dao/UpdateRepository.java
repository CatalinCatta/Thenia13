package com.example.backend.dao;

import com.example.backend.model.Update;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UpdateRepository extends JpaRepository<Update, Long> {
    List<Update> findAllByGameId(long gameId);
}
