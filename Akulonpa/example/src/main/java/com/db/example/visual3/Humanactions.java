package com.db.example.visual3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Humanactions {
    @Id
    private int time;
    private String event;

    public Humanactions() {
    }

    public Humanactions(int time, String event) {
        this.time = time;
        this.event = event;
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public String getEvent() {
        return this.event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Humanactions time(int time) {
        setTime(time);
        return this;
    }

    public Humanactions event(String event) {
        setEvent(event);
        return this;
    }
}



