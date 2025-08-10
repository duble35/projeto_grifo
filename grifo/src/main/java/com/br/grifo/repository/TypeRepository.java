package com.br.grifo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.br.grifo.model.Type;

public interface TypeRepository extends JpaRepository<Type, Long> {

    // Additional query methods can be defined here if needed
    
}
