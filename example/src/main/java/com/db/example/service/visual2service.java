package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.example.visual2.annualRepository;
import com.db.example.visual2.maunaloa_annual;
import com.db.example.visual2.monthlyRepository;
import com.db.example.visual2.maunaloa_monthly;

@Service
public class visual2service {

    @Autowired
    annualRepository annualRepo;
    @Autowired
    monthlyRepository monthlyRepo;

    public visual2service() {
 
    }

    public List<maunaloa_annual> getAnnuals() {
        return annualRepo.findAll();
    }

    public void addAnnual(maunaloa_annual annual) {
        annualRepo.save(annual);
    }

    public List<maunaloa_monthly> getMonthlys() {
        return monthlyRepo.findAll();
    }

    public void addMonthly(maunaloa_monthly monthly) {
        monthlyRepo.save(monthly);
    }

    
}
