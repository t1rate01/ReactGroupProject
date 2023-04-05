package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.example.visual1.nhannual;
import com.db.example.visual1.nhannualRepository;
import com.db.example.visual1.shannual;
import com.db.example.visual1.shannualRepository;
import com.db.example.visual1.visual1;
import com.db.example.visual1.visual1Repository;

@Service
public class visual1Service {
    @Autowired
    visual1Repository vis1Repo;
    @Autowired
    nhannualRepository nhannualRepo;
    @Autowired
    shannualRepository shannualRepo;


    public visual1Service(){
        
    }

    public List<visual1> getVisual(){
    return vis1Repo.findAll();
    }

    public List<nhannual> getNhannuals(){
        return nhannualRepo.findAll();
    }

    public List<shannual> getShannuals(){
        return shannualRepo.findAll();
    }
}
