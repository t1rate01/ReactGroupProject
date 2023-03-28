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

	public static void main(String[] args) {
		SpringApplication.run(ExampleApplication.class, args);
	}

	@PostConstruct
	public void init(){
		//userRepo.save(new user(0L, "admin", "admin"));
		List<sector> sectors = sectorRepo.findAll();
		for(sector s : sectors){
			System.out.println(s.getSector()+" "+s.getShare());
		}



	}

}
