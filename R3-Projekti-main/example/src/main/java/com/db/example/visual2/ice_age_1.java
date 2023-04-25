package com.db.example.visual2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ice_age_1 {
    @Id
    private Integer year;
    private Float co2;


    public ice_age_1() {
    }

    public ice_age_1(Integer year, Float co2) {
        this.year = year;
        this.co2 = co2;
    }

    public Integer getYear() {
        return this.year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Float getCo2() {
        return this.co2;
    }

    public void setCo2(Float co2) {
        this.co2 = co2;
    }

    public ice_age_1 year(Integer year) {
        setYear(year);
        return this;
    }

    public ice_age_1 co2(Float co2) {
        setCo2(co2);
        return this;
    }



}

 