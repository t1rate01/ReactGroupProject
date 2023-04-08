package com.db.example.visual1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class shmonthly {
    @Id
    private String yearmo;
    private double anomaly;


    public shmonthly() {
    }

    public shmonthly(String yearmo, double anomaly) {
        this.yearmo = yearmo;
        this.anomaly = anomaly;
    }

    public String getYearmo() {
        return this.yearmo;
    }

    public void setYearmo(String yearmo) {
        this.yearmo = yearmo;
    }

    public double getAnomaly() {
        return this.anomaly;
    }

    public void setAnomaly(double anomaly) {
        this.anomaly = anomaly;
    }


}
