package com.db.example.visual2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class maunaloa_monthly {
    @Id
    private String decimalyear;
    private String average;

    public maunaloa_monthly() {
    }

    public maunaloa_monthly(String decimalyear, String average) {
        this.decimalyear = decimalyear;
        this.average = average;
    }

    public String getDecimalyear() {
        return this.decimalyear;
    }

    public void setDecimalyear(String decimalyear) {
        this.decimalyear = decimalyear;
    }

    public String getAverage() {
        return this.average;
    }

    public void setAverage(String average) {
        this.average = average;
    }

    public maunaloa_monthly decimalyear(String decimalyear) {
        setDecimalyear(decimalyear);
        return this;
    }

    public maunaloa_monthly average(String average) {
        setAverage(average);
        return this;
    }
}
