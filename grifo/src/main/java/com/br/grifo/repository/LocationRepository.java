package com.br.grifo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.grifo.model.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {

    // Additional query methods can be defined here if needed
    
}
