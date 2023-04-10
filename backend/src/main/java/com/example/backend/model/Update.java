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
public class Update {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public int gameId;

    public String name;

    public double version;

    public String thumbnail;

    public String description;

    @ElementCollection
    public ArrayList<String> patchNote = new ArrayList<>();

    public Date date;
}
