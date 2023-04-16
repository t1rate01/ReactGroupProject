package com.db.example.visual4;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.HashMap;
import java.util.Map;

@Entity
public class Visual4Data {
    @Id
    private int year;
    private Map<String, Double> data;

    public Visual4Data() {
        data = new HashMap<>();
    }

    public Visual4Data(int year) {
        this.year = year;
        data = new HashMap<>();
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getCountryData(String country) {
        return this.data.getOrDefault(country, 0.0);
    }

    public void setCountryData(String country, double value) {
        this.data.put(country, value);
    }
}
