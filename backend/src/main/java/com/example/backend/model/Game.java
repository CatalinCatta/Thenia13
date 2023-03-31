package com.example.backend.model;

import java.util.ArrayList;
import java.util.Date;

public class Game {
    public int Id;
    public String Name;
    public String Description;
    public String Story;
    public ArrayList<String> Done = new ArrayList<>();
    public ArrayList<String> InProgress = new ArrayList<>();
    public ArrayList<String> Future = new ArrayList<>();
    public ArrayList<String> SomeIdeas = new ArrayList<>();
    public ArrayList<String> Screenshots = new ArrayList<>();
    public ArrayList<String> Trailers = new ArrayList<>();
    public ArrayList<String> Gameplay = new ArrayList<>();
    public String Thumbnail;
    public String Icon;
    public Date StartingDate;
    public Date RealeaseDate;
}
