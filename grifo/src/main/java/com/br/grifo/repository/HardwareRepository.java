package com.br.grifo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.grifo.model.Hardware;

public interface HardwareRepository extends JpaRepository<Hardware, Long> {
}