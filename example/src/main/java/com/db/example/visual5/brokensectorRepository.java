package com.db.example.visual5;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface brokensectorRepository extends JpaRepository<subsector_breakdown, Long>{
    
}
