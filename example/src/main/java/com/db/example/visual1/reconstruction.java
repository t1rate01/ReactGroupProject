package com.db.example.visual1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class reconstruction {
    
    @Id
    private String year;
    private double value;

    public reconstruction() {
    }

    public reconstruction(String year, double value) {
        this.year = year;
        this.value = value;
    }

    public String getYear() {
        return this.year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public double getValue() {
        return this.value;
    }

    public void setValue(double value) {
        this.value = value;
    }


}
