package com.db.example.SavedViews;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class savedViewService {
    @Autowired
    savedViewRepository savedViewRepo;

    public savedview saveView(savedview view) {
        savedViewRepo.save(view);
        return view;
    }

    public savedview getView(String viewID) {
        return savedViewRepo.findById(viewID).orElse(null);
    }

    public void deleteView(String viewID) {
        savedViewRepo.deleteById(viewID);
    }

    
}
