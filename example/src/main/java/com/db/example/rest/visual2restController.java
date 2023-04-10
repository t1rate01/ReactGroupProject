package com.db.example.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.db.example.service.visual2service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import com.db.example.visual2.maunaloa_annual;
import com.db.example.visual2.maunaloa_monthly;

@CrossOrigin
@RestController
public class visual2restController {
    
    visual2service Visual2Service;

    @Autowired
    public visual2restController(visual2service Visual2Service) {
        this.Visual2Service = Visual2Service;
    }

     // REST MAPPAUKSET

    @GetMapping("/v2annuals")
    public List<maunaloa_annual> getAnnuals(){
        System.out.println("@Get annuals");
        return Visual2Service.getAnnuals();
    }

    @GetMapping("/v2monthlys")
    public List<maunaloa_monthly> getMonthlys(){
        System.out.println("@Get monthlys");
        return Visual2Service.getMonthlys();
    }


}
