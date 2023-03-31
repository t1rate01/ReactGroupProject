package com.db.example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.List;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class ExampleApplication {

	@Autowired
	userRepository userRepo;
	@Autowired
	sectorRepository sectorRepo;
	@Autowired
	subsectorRepository subRepo;
	@Autowired
	brokensectorRepository brokenRepo;

	public static void main(String[] args) {
		SpringApplication.run(ExampleApplication.class, args);
	}

	@PostConstruct
	public void init(){
		//userRepo.save(new user(0L, "admin", "admin"));
		List<sector> sectors = sectorRepo.findAll();
		for(sector s : sectors){
			
			if(s.getShare()!=null){
			Double x = Double.valueOf(s.getShare());
			System.out.println(s.getSector()+" "+ x);
			}
		}

		List<Sub_sector> subsectors = subRepo.findAll();
		for(Sub_sector s : subsectors){
			if(s.getShare()!=null){
			Double x = Double.valueOf(s.getShare());
			System.out.println(s.getSubsector()+" "+ x);
			}
		}

		List<subsector_breakdown> broken = brokenRepo.findAll();
		for(subsector_breakdown s : broken){
			if(s.getSector_Share()!=null){
			Double x = Double.valueOf(s.getSector_Share());
			System.out.println(s.getSub_sector()+" "+ x);
			}
		}



	}

}
