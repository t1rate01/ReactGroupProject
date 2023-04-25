package com.db.example.visual2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface annualRepository extends JpaRepository<maunaloa_annual, Long> {
    
}
