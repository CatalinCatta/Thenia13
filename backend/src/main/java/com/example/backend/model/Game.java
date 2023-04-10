package com.example.backend.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.Date;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    public String name;

    public String description;

    public String story;

    @ElementCollection
    public ArrayList<String> done = new ArrayList<>();

    @ElementCollection
    public ArrayList<String> inProgress = new ArrayList<>();

    @ElementCollection
    public ArrayList<String> future = new ArrayList<>();

    @ElementCollection
    public ArrayList<String> someIdeas = new ArrayList<>();

    @ElementCollection
    public ArrayList<String> screenshots = new ArrayList<>();

    @ElementCollection
    public ArrayList<String> trailers = new ArrayList<>();

    @ElementCollection
    public ArrayList<String> gameplay = new ArrayList<>();

    public String thumbnail;

    public String icon;

    public Date startingDate;

    public Date realeaseDate;
}
