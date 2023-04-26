package com.db.example.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.db.example.security.securityService;
import com.db.example.service.visual5service;
import com.db.example.visual5.sectori;
import com.db.example.visual5.Sub_sector;
import com.db.example.visual5.subsector_breakdown;

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin  // hyväksynee tällä kaiken
@RestController
public class visual5restController {

    @Autowired
    visual5service Visual5Service;
    @Autowired
    securityService secService;

    
    public visual5restController(visual5service Visual5Service) {
        this.Visual5Service = Visual5Service;
    }

    // TÄNNE REST CONTROLLERIT POLUT JNE
    //getSectors()
    @GetMapping("/sectors")
    public List <sectori> getSectors(){
        return Visual5Service.getSectors();
    }

    //getSubsectors()
    @GetMapping("/subsectors")
    public List <Sub_sector> getSubsectors(){
        return Visual5Service.getSubsectors();
    }

    //getBreakdowns()
    @GetMapping("/breakdowns")
    public List <subsector_breakdown> getBreakdowns(){
        return Visual5Service.getSubsector_breakdowns();
    }

}
