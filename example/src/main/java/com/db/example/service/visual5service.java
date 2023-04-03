package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.example.visual5.sectori;
import com.db.example.visual5.Sub_sector;
import com.db.example.visual5.subsector_breakdown;
import com.db.example.visual5.brokensectorRepository;
import com.db.example.visual5.sectorRepository;
import com.db.example.visual5.subsectorRepository;


@Service
public class visual5service {


	@Autowired
	sectorRepository sectorRepo;
	@Autowired
	subsectorRepository subRepo;
	@Autowired
	brokensectorRepository brokenRepo;

    public visual5service() {
 
    }


    public List<sectori> getSectors() {
        return sectorRepo.findAll();
    }

    public void addSector(sectori sector) {
        sectorRepo.save(sector);
    }
        

    public List<Sub_sector> getSubsectors() {
        return subRepo.findAll();
    }

    public void addSubsector(Sub_sector subsector) {
        subRepo.save(subsector);
    }

    public List<subsector_breakdown> getSubsector_breakdowns() {
        return brokenRepo.findAll();
    }

    public void addSubsector_breakdown(subsector_breakdown subsector_breakdown) {
        brokenRepo.save(subsector_breakdown);
    }


}
