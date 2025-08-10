package com.br.grifo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.br.grifo.model.ModelHardware;

public interface ModelRepository extends JpaRepository<ModelHardware, Long> {

    // Additional query methods can be defined here if needed
    
}
