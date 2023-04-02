package com.db.example.visual5;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface subsectorRepository extends JpaRepository<Sub_sector, Long> {
    
}
