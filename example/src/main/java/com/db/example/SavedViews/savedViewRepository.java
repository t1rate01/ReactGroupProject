package com.db.example.SavedViews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface savedViewRepository extends JpaRepository<savedview, String> {
    
}
