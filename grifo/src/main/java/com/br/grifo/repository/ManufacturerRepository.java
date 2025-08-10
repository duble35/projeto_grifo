package com.br.grifo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.grifo.model.Manufacturer;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {
    // Custom query methods can be defined here if needed
    
}
