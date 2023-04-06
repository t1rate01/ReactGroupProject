package com.db.example.visual3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Gast {
    @Id
    private int time;
    private double fifty;

    public Gast() {
    }

    public Gast(int time, double fifty) {
        this.time = time;
        this.fifty = fifty;
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public double getFifty() {
        return this.fifty;
    }

    public void setFifty(double fifty) {
        this.fifty = fifty;
    }

    public Gast time(int time) {
        setTime(time);
        return this;
    }

    public Gast fifty(double fifty) {
        setFifty(fifty);
        return this;
    }
}