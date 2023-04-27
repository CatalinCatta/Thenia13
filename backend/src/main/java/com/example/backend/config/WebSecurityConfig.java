package com.example.backend.config;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import io.github.cdimascio.dotenv.Dotenv;

import java.util.Properties;

@Configuration(enforceUniqueMethods = false)
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig implements WebSecurityConfigurer {

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/api/games/**", "api/updates/**", "api/accounts/signUp", "api/accounts/logIn")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .and().exceptionHandling().disable();//<-
        return http.build();
    }

    @Override
    public void configure(SecurityBuilder builder) throws Exception {

    }

    @Override
    public void init(SecurityBuilder builder) throws Exception {

    }


    @Bean
    public JavaMailSender javaMailSender() {
        var dotenv = Dotenv.configure().load();

        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        javaMailSender.setHost("smtp.mail.yahoo.com");
        javaMailSender.setPort(587);

        javaMailSender.setUsername(dotenv.get("EMAIL_USERNAME"));
        javaMailSender.setPassword(dotenv.get("EMAIL_PASSWORD"));

        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");

        return javaMailSender;
    }
}
