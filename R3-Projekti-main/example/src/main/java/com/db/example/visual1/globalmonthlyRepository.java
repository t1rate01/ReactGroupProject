package com.db.example.visual1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface globalmonthlyRepository extends JpaRepository<globalmonthly, Long> {
    
}
