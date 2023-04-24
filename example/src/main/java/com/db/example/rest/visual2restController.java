package com.db.example.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.db.example.security.securityService;
import com.db.example.service.visual2service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.db.example.visual2.maunaloa_annual;
import com.db.example.visual2.maunaloa_monthly;
import com.db.example.visual2.ice_age_1;
import com.db.example.visual2.ice_age_2;
import com.db.example.visual2.ice_age_3;


@CrossOrigin
@RestController
public class visual2restController {
    
    @Autowired
    visual2service Visual2Service;
    @Autowired
    securityService secService;
   
   
    public visual2restController(visual2service Visual2Service) {
        this.Visual2Service = Visual2Service;
    }

   // REST MAPPAUKSET
    //getAnnuals(){
    @GetMapping("/v2annuals")
    public List <maunaloa_annual> getAnnuals(){
        return Visual2Service.getAnnuals();
    }

    //getMonthlys(){
    @GetMapping("/v2monthlys")
    public List <maunaloa_monthly> getMonthlys(){
        return Visual2Service.getMonthlys();
    }
    
    // getIce_age_1s()
    @GetMapping("/v2ice_age_1")
    public List <ice_age_1> getIce_age_1s(){
        return Visual2Service.getIce_age_1s();
    }


    //getIce_age_2s()
    @GetMapping("/v2ice_age_2")
    public List <ice_age_2> getIce_age_2s(){
        return Visual2Service.getIce_age_2s();
    }

    // getIce_age_3s()
    @GetMapping("/v2ice_age_3")
    public List <ice_age_3> getIce_age_3s(){
        return Visual2Service.getIce_age_3s();
    }

}
