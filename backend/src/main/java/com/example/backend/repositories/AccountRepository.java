package com.example.backend.repositories;

import com.example.backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUsername(String username);
}