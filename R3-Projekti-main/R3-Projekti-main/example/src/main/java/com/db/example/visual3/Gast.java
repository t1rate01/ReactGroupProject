package com.db.example.visual3;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Gast {
    @Id
    private Integer mytime;
    @Column(name = "50")
    private Double fifty;

    public Gast() {
    }

    public Gast(Integer mytime, Double fifty) {
        this.mytime = mytime;
        this.fifty = fifty;
    }

    public Integer getTime() {
        return this.mytime;
    }

    public void setTime(Integer mytime) {
        this.mytime = mytime;
    }

    public double getFifty() {
        return this.fifty;
    }

    public void setFifty(double fifty) {
        this.fifty = fifty;
    }

    public Gast mytime(Integer mytime) {
        setTime(mytime);
        return this;
    }

    public Gast fifty(Double fifty) {
        setFifty(fifty);
        return this;
    }
}