package com.db.example.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.example.service.visual5service;
import com.db.example.visual5.sectori;
import com.db.example.visual5.Sub_sector;
import com.db.example.visual5.subsector_breakdown;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class visual5restController {

    visual5service Visual5Service;

    @Autowired
    public visual5restController(visual5service Visual5Service) {
        this.Visual5Service = Visual5Service;
    }


    // TÄNNE REST CONTROLLERIT POLUT JNE
    @GetMapping("/sectors")
    public List<sectori> getSectors(){
        System.out.println("@Get sectors");
        return Visual5Service.getSectors();
    }

    @GetMapping("/subsectors")
    public List<Sub_sector> getSubsectors(){
        System.out.println("@Get subsectors");
        return Visual5Service.getSubsectors();
    }

    @GetMapping("/breakdowns")
    public List<subsector_breakdown> getBreakdowns(){
        System.out.println("@Get breakdowns");
        return Visual5Service.getSubsector_breakdowns();
    }
}
