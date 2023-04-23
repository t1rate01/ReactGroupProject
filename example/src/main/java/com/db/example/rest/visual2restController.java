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
    public ResponseEntity<List<maunaloa_annual>> getAnnuals(@RequestHeader("Authorization") String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual2Service.getAnnuals(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    //getMonthlys(){
    @GetMapping("/v2monthlys")
        public ResponseEntity<List<maunaloa_monthly>> getMonthlys(@RequestHeader("Authorization") String bearer){
            if (bearer != null){
                if (bearer.startsWith("Bearer")){
                    String token = bearer.split (" ")[1];
                    String username = secService.validateToken(token);
                    if (username != null){
                        return new ResponseEntity<>(Visual2Service.getMonthlys(), HttpStatus.OK);
                    }
                }}
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
     }
    
    // getIce_age_1s()
    @GetMapping("/v2ice_age_1")
    public ResponseEntity<List<ice_age_1>> getIce_age_1s(@RequestHeader("Authorization") String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual2Service.getIce_age_1s(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    //getIce_age_2s()
    @GetMapping("/v2ice_age_2")
    public ResponseEntity<List<ice_age_2>> getIce_age_2s(@RequestHeader("Authorization") String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual2Service.getIce_age_2s(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

    // getIce_age_3s()
    @GetMapping("/v2ice_age_3")
    public ResponseEntity<List<ice_age_3>> getIce_age_3s(@RequestHeader("Authorization") String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split (" ")[1];
                String username = secService.validateToken(token);
                if (username != null){
                    return new ResponseEntity<>(Visual2Service.getIce_age_3s(), HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }

}
