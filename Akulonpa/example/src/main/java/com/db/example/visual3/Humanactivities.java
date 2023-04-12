package com.db.example.visual3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Humanactivities {
    @Id
    private Integer time;
    private String event;

    public Humanactivities() {
    }

    public Humanactivities(Integer time, String event) {
        this.time = time;
        this.event = event;
    }

    public Integer getTime() {
        return this.time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public String getEvent() {
        return this.event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Humanactivities time(Integer time) {
        setTime(time);
        return this;
    }

    public Humanactivities event(String event) {
        setEvent(event);
        return this;
    }
}