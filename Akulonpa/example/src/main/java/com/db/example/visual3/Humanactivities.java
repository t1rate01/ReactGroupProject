package com.db.example.visual3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Humanactivities {
    @Id
    private Integer mytime;
    private String event;

    public Humanactivities() {
    }

    public Humanactivities(Integer mytime, String event) {
        this.mytime = mytime;
        this.event = event;
    }

    public Integer getTime() {
        return this.mytime;
    }

    public void setTime(Integer mytime) {
        this.mytime = mytime;
    }

    public String getEvent() {
        return this.event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Humanactivities mytime(Integer mytime) {
        setTime(mytime);
        return this;
    }

    public Humanactivities event(String event) {
        setEvent(event);
        return this;
    }
}