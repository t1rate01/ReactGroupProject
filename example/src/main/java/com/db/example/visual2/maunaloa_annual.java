package com.db.example.visual2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class maunaloa_annual {
    @Id
    private String year;
    private String mean;

    public maunaloa_annual() {
    }

    public maunaloa_annual(String year, String mean) {
        this.year = year;
        this.mean = mean;
    }

    public String getYear() {
        return this.year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getMean() {
        return this.mean;
    }

    public void setMean(String mean) {
        this.mean = mean;
    }

    public maunaloa_annual year(String year) {
        setYear(year);
        return this;
    }

    public maunaloa_annual mean(String mean) {
        setMean(mean);
        return this;
    }
}
