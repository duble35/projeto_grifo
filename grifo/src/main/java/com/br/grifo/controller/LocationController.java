package com.br.grifo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.br.grifo.model.Location;
import com.br.grifo.repository.LocationRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;


@RestController
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;

    @GetMapping
    public List<Location> getLocationAll() {
        return locationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Location> getLocationById(@PathVariable Long id) {
        return locationRepository.findById(id);
                
    }
    
    @PostMapping
    public Location createLocation(@RequestAttribute Location location){
        return locationRepository.save(location);
    }

    @PutMapping("/{id}")
    public Location updateLocation(@PathVariable Long id, @RequestAttribute Location location) {
        location.setId(id);
        return locationRepository.save(location);
    }

    @DeleteMapping("/{id}")
    public void deleteLocation(@PathVariable Long id) {
        locationRepository.deleteById(id);
    }

}
