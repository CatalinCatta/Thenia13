package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(length = 1000)
    private String description;
    private Date startingDate = new Date();
    @Column(length = 2000)
    private String story;
    @Column(length = 1000)
    private String icon;
    private Date releaseDate;
    @ElementCollection
    private List<String> done = new ArrayList<>();
    @ElementCollection
    private List<String> inProgress = new ArrayList<>();
    @ElementCollection
    private List<String> future = new ArrayList<>();
    @ElementCollection
    private List<String> someIdeas = new ArrayList<>();
    @ElementCollection
    private List<String> screenshots = new ArrayList<>();
    @ElementCollection
    private List<String> trailers = new ArrayList<>();
    @ElementCollection
    private List<String> gameplay = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "game", orphanRemoval = true)
    private List<Update> updates = new ArrayList<>();

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(Date startingDate) {
        this.startingDate = startingDate;
    }

    public String getStory() {
        return story;
    }

    public void setStory(String story) {
        this.story = story;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public List<String> getDone() {
        return done;
    }

    public void setDone(List<String> done) {
        this.done = done;
    }

    public List<String> getInProgress() {
        return inProgress;
    }

    public void setInProgress(List<String> inProgress) {
        this.inProgress = inProgress;
    }

    public List<String> getFuture() {
        return future;
    }

    public void setFuture(List<String> future) {
        this.future = future;
    }

    public List<String> getSomeIdeas() {
        return someIdeas;
    }

    public void setSomeIdeas(List<String> someIdeas) {
        this.someIdeas = someIdeas;
    }

    public List<String> getScreenshots() {
        return screenshots;
    }

    public void setScreenshots(List<String> screenshots) {
        this.screenshots = screenshots;
    }

    public List<String> getTrailers() {
        return trailers;
    }

    public void setTrailers(List<String> trailers) {
        this.trailers = trailers;
    }

    public List<String> getGameplay() {
        return gameplay;
    }

    public void setGameplay(List<String> gameplay) {
        this.gameplay = gameplay;
    }

    public List<Update> getUpdates() {
        return updates;
    }

    public void setUpdates(List<Update> updates) {
        this.updates = updates;
    }

}
