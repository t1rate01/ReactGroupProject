package com.db.example.visual2;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class maunaloa_monthly {
    @Id
    private Float decimalyear;
    private Float average;


    public maunaloa_monthly() {
    }

    public maunaloa_monthly(Float decimalyear, Float average) {
        this.decimalyear = decimalyear;
        this.average = average;
    }

    public Float getDecimalyear() {
        return this.decimalyear;
    }

    public void setDecimalyear(Float decimalyear) {
        this.decimalyear = decimalyear;
    }

    public Float getAverage() {
        return this.average;
    }

    public void setAverage(Float average) {
        this.average = average;
    }

    public maunaloa_monthly decimalyear(Float decimalyear) {
        setDecimalyear(decimalyear);
        return this;
    }

    public maunaloa_monthly average(Float average) {
        setAverage(average);
        return this;
    }

}
