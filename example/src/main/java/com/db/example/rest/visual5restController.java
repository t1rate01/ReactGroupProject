package com.db.example.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<sectori>> getSectors(@RequestHeader("Authorization")String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual5Service.getSectors(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }

    //getSubsectors()
    @GetMapping("/subsectors")
    public ResponseEntity<List<Sub_sector>> getSubsectors(@RequestHeader("Authorization")String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual5Service.getSubsectors(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }

    //getBreakdowns()
    @GetMapping("/breakdowns")
    public ResponseEntity<List<subsector_breakdown>> getBreakdowns(@RequestHeader("Authorization")String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual5Service.getSubsector_breakdowns(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }

}
