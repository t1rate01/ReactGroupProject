package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.example.visual4.visual4Data;
import com.db.example.visual4.visual4Repository;

@Service
public class Visual4DataService {

    @Autowired
    private visual4Repository Visual4Repository;


    public Visual4DataService() {
    }

    public List<visual4Data> getAllVisual4Data() {
        return Visual4Repository.findAll();
    }


    


}
