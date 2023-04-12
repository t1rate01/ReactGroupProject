package com.db.example.visual3;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Gast {
    @Id
    private Integer time;
    @Column(name = "50")
    private Double fifty;

    public Gast() {
    }

    public Gast(Integer time, Double fifty) {
        this.time = time;
        this.fifty = fifty;
    }

    public Integer getTime() {
        return this.time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public double getFifty() {
        return this.fifty;
    }

    public void setFifty(double fifty) {
        this.fifty = fifty;
    }

    public Gast time(Integer time) {
        setTime(time);
        return this;
    }

    public Gast fifty(Double fifty) {
        setFifty(fifty);
        return this;
    }
}