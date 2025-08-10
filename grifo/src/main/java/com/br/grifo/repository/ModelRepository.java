package com.br.grifo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ch.qos.logback.core.model.Model;

public interface ModelRepository extends JpaRepository<Model, Long> {

    // Additional query methods can be defined here if needed
    
}
