package com.db.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.example.visual4.Visual4Data;
import com.db.example.visual4.Visual4DataRepository;

@Service
public class Visual4DataService {

    @Autowired
    private Visual4DataRepository visual4DataRepository;

    public Visual4DataDataService() {
    }

    public List<Visual4Data> getAllVisual4Data() {
        return visual4DataRepository.findAll();
    }

    public Visual4Data getVisual4DataByYear(int year) {
        return visual4DataRepository.findById(year).orElse(null);
    }

    public Visual4Data saveVisual4Data(Visual4Data visual4Data) {
        return visual4DataRepository.save(visual4Data);
    }

    public void deleteVisual4Data(Visual4Data visual4Data) {
        visual4DataRepository.delete(visual4Data);
    }

}
