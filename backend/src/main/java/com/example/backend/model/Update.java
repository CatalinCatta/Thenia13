package com.example.backend.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.Date;

@Entity
public class Update{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String thumbnail;
    private String description;
    private Date date;
    private int gameId;
    private double version;
    @ElementCollection
    private ArrayList<String> patchNote = new ArrayList<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public double getVersion() {
        return version;
    }

    public void setVersion(double version) {
        this.version = version;
    }

    public ArrayList<String> getPatchNote() {
        return patchNote;
    }

    public void setPatchNote(ArrayList<String> patchNote) {
        this.patchNote = patchNote;
    }
}
