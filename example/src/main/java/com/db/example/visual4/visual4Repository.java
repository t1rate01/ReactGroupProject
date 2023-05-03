package com.db.example.visual4;


import org.springframework.data.jpa.repository.JpaRepository;  // import the JpaRepository interface
import org.springframework.stereotype.Repository;  // import the Repository annotation

@Repository
public interface visual4Repository extends JpaRepository<visual4Data, Long> {
    
    
}
