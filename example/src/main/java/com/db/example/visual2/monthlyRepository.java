package com.db.example.visual2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface monthlyRepository extends JpaRepository<maunaloa_monthly, Long> {
    
}
