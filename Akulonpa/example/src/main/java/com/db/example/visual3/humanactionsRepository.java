package com.db.example.visual3;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface humanactionsRepository extends JpaRepository<Humanactions, Long>{
    
}
