package com.example.backend.services;

import com.example.backend.model.Account;
import com.example.backend.repositories.AccountRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class AccountDetailsService implements UserDetailsService {
    private final AccountRepository AccountRepository;

    public AccountDetailsService(AccountRepository AccountRepository) {
        this.AccountRepository = AccountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = AccountRepository.findByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(account.getUsername(), account.getPassword(), emptyList());
    }

}
