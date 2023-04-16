package com.db.example.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.db.example.service.Visual4DataService;
import com.db.example.visual4.Visual4Data;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/visual4data")
public class Visual4DataController {

    @Autowired
    private Visual4DataService visual4DataService;

    @GetMapping
    public List<Visual4Data> getAllVisual4Data() {
        return visual4DataService.getAllVisual4Data();
    }

    @GetMapping("/{year}")
    public ResponseEntity<Visual4Data> getVisual4DataByYear(@PathVariable("year") int year) {
        Visual4Data visual4Data = visual4DataService.getVisual4DataByYear(year);
        if (visual4Data == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(visual4Data, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Visual4Data> saveVisual4Data(@RequestBody Visual4Data visual4Data) {
        Visual4Data savedVisual4Data = visual4DataService.saveVisual4Data(visual4Data);
        return new ResponseEntity<>(savedVisual4Data, HttpStatus.CREATED);
    }

    @PutMapping("/{year}")
    public ResponseEntity<Visual4Data> updateVisual4Data(@PathVariable("year") int year, @RequestBody Visual4Data visual4Data) {
        Visual4Data currentVisual4Data = visual4DataService.getVisual4DataByYear(year);
        if (currentVisual4Data == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        currentVisual4Data.setData(visual4Data.getData());
        Visual4Data updatedVisual4Data = visual4DataService.saveVisual4Data(currentVisual4Data);
        return new ResponseEntity<>(updatedVisual4Data, HttpStatus.OK);
    }

    @DeleteMapping("/{year}")
    public ResponseEntity<HttpStatus> deleteVisual4Data(@PathVariable("year") int year) {
        Visual4Data visual4Data = visual4DataService.getVisual4DataByYear(year);
        if (visual4Data == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        visual4DataService.deleteVisual4Data(visual4Data);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
