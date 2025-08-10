package com.br.grifo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.br.grifo.model.TypeHardware;

public interface TypeRepository extends JpaRepository<TypeHardware, Long> {

    // Additional query methods can be defined here if needed
    
}
