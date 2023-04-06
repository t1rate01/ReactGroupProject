package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.example.visual3.Gast;
import com.db.example.visual3.Carbon;
import com.db.example.visual3.Humanactions;
import com.db.example.visual3.gastRepository;
import com.db.example.visual3.carbonRepository;
import com.db.example.visual3.humanactionsRepository;


@Service
public class visual3service {


	@Autowired
	gastRepository gastRepo;
	@Autowired
	carbonRepository carbRepo;
	@Autowired
	humanactionsRepository humanRepo;

    public visual3service() {
 
    }


    public List<Gast> getGasts() {
        return gastRepo.findAll();
    }

    public void addSector(Gast sector) {
        gastRepo.save(sector);
    }
        

    public List<Carbon> getCarbons() {
        return carbRepo.findAll();
    }

    public void addSubsector(Carbon carbon) {
        carbRepo.save(carbon);
    }

    public List<Humanactions> getHumanactions() {
        return humanRepo.findAll();
    }

    public void addHumanactions(Humanactions humanactions) {
        humanRepo.save(humanactions);
    }


}
