package com.db.example.visual3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface gastRepository extends JpaRepository<Gast, Long> {
    
}
