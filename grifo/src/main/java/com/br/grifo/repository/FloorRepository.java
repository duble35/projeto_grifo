package com.br.grifo.repository;

import com.br.grifo.model.Floor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FloorRepository extends JpaRepository<Floor, Long> {

    // Additional query methods can be defined here if needed
    
}
