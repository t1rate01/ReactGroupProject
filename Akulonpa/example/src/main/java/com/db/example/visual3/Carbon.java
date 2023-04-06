package com.db.example.visual3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Carbon {
    @Id

    private Long time;
    private Double carbondioxide;
    private Double carbondioxide_un;

    public Carbon() {
    }

    public Carbon(Long time, Double carbondioxide, Double carbondioxide_un) {
        this.time = time;
        this.carbondioxide = carbondioxide;
        this.carbondioxide_un = carbondioxide_un;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public Double getCarbondioxide() {
        return carbondioxide;
    }

    public void setCarbondioxide(Double carbondioxide) {
        this.carbondioxide = carbondioxide;
    }

    public Double getCarbondioxide_un() {
        return carbondioxide_un;
    }

    public void setCarbondioxide_un(Double carbondioxide_un) {
        this.carbondioxide_un = carbondioxide_un;
    }
}