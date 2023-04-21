package com.db.example.visual3;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Carbon {
    @Id

    private Integer mytime;
    private Double carbondioxide;
    private Double carbondioxide_un;

    public Carbon() {
    }

    public Carbon(Integer mytime, Double carbondioxide, Double carbondioxide_un) {
        this.mytime = mytime;
        this.carbondioxide = carbondioxide;
        this.carbondioxide_un = carbondioxide_un;
    }

    public Integer getTime() {
        return mytime;
    }

    public void setTime(Integer mytime) {
        this.mytime = mytime;
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