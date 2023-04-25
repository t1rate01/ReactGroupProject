package com.db.example.visual1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class nhannual {
    @Id
    private int year;
    private double anomaly;


    public nhannual() {
    }

    public nhannual(int year, double anomaly) {
        this.year = year;
        this.anomaly = anomaly;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getAnomaly() {
        return this.anomaly;
    }

    public void setAnomaly(double anomaly) {
        this.anomaly = anomaly;
    }


}
