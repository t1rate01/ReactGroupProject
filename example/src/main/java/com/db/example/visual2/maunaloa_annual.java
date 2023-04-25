package com.db.example.visual2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class maunaloa_annual {
    @Id
    private int year;
    private Float mean;


    public maunaloa_annual() {
    }

    public maunaloa_annual(int year, Float mean) {
        this.year = year;
        this.mean = mean;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Float getMean() {
        return this.mean;
    }

    public void setMean(Float mean) {
        this.mean = mean;
    }

    public maunaloa_annual year(int year) {
        setYear(year);
        return this;
    }

    public maunaloa_annual mean(Float mean) {
        setMean(mean);
        return this;
    }
  
}
