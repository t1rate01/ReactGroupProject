package com.db.example.visual1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class reconstruction {
    
    @Id
    private int year;
    private double value;

    public reconstruction() {
    }

    public reconstruction(int year, double value) {
        this.year = year;
        this.value = value;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getValue() {
        return this.value;
    }

    public void setValue(double value) {
        this.value = value;
    }


}
