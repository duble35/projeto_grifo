package com.br.grifo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.grifo.model.Manufacturer;
import com.br.grifo.repository.ManufacturerRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/manufacturer")
public class ManufacturerController {

    @Autowired
    private ManufacturerRepository manufacturerRepository;
    
    @GetMapping
    public List<Manufacturer> getAllManufacturers() {
        return manufacturerRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Manufacturer> getManufacturerById(@PathVariable Long id) {
        return manufacturerRepository.findById(id);
    }

    @PostMapping
    public Manufacturer createManufacturer(@RequestBody Manufacturer manufacturer) {
        return manufacturerRepository.save(manufacturer);
    }

    @PutMapping("/{id}")
    public Manufacturer updaManufacturer(@PathVariable Long id, @RequestBody Manufacturer manufacturer) {
        manufacturer.setId(id);
        return manufacturerRepository.save(manufacturer);

    }

    @DeleteMapping("/{id}")
    public void deleteManufacturer(@PathVariable Long id) {
        manufacturerRepository.deleteById(id);
    }    
}
