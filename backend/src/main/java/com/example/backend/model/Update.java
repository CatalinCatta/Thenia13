package com.example.backend.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Update {
    public int Id;
    public int GameId;
    public String Name;
    public double Version;
    public String Thumbnail;
    public String Description;
    public ArrayList<String> PatchNote = new ArrayList<>();
    public Date Date;
}
