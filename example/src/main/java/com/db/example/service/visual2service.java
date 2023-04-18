package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.example.visual2.annualRepository;
import com.db.example.visual2.maunaloa_annual;
import com.db.example.visual2.monthlyRepository;
import com.db.example.visual2.maunaloa_monthly;
import com.db.example.visual2.ice_age_1;
import com.db.example.visual2.ice_age_2;
import com.db.example.visual2.ice_age_3;
import com.db.example.visual2.ice_age_1_Repository;
import com.db.example.visual2.ice_age_2_Repository;
import com.db.example.visual2.ice_age_3_Repository;

@Service
public class visual2service {

    @Autowired
    annualRepository annualRepo;
    @Autowired
    monthlyRepository monthlyRepo;
    @Autowired
    ice_age_1_Repository ice_age_1_Repo;
    @Autowired
    ice_age_2_Repository ice_age_2_Repo;
    @Autowired
    ice_age_3_Repository ice_age_3_Repo;


    public visual2service() {
 
    }

    public List<ice_age_1> getIce_age_1s() {
        return ice_age_1_Repo.findAll();
    }

    public void addIce_age_1(ice_age_1 ice_age_1) {
        ice_age_1_Repo.save(ice_age_1);
    }

    public List<ice_age_2> getIce_age_2s() {
        return ice_age_2_Repo.findAll();
    }

    public void addIce_age_2(ice_age_2 ice_age_2) {
        ice_age_2_Repo.save(ice_age_2);
    }

    public List<ice_age_3> getIce_age_3s() {
        return ice_age_3_Repo.findAll();
    }

    public void addIce_age_3(ice_age_3 ice_age_3) {
        ice_age_3_Repo.save(ice_age_3);
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
