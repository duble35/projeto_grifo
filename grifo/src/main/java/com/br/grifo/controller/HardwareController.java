package com.br.grifo.controller;

import com.br.grifo.model.Hardware;
import com.br.grifo.repository.HardwareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hardware")
public class HardwareController {

    @Autowired
    private HardwareRepository hardwareRepository;

    @GetMapping
    public List<Hardware> getAllHardware() {
        return hardwareRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Hardware> getHardwareById(@PathVariable Long id) {
        return hardwareRepository.findById(id);
    }

    @PostMapping
    public Hardware createHardware(@RequestBody Hardware hardware) {
        return hardwareRepository.save(hardware);
    }

    @PutMapping("/{id}")
    public Hardware updateHardware(@PathVariable Long id, @RequestBody Hardware hardware) {
        hardware.setId(id);
        return hardwareRepository.save(hardware);
    }

    @DeleteMapping("/{id}")
    public void deleteHardware(@PathVariable Long id) {
        hardwareRepository.deleteById(id);
    }
}