package com.br.grifo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.grifo.model.Floor;
import com.br.grifo.repository.FloorRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/floor")
public class FloorController {
    @Autowired
    private FloorRepository floorRepository;

    @GetMapping
    public List<Floor> getAllFloors() {
        return floorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Floor> getFloorById(@PathVariable Long id) {
        return floorRepository.findById(id);
    }

    @PostMapping
    public Floor postMethodName(@RequestBody Floor floor) {
        return floorRepository.save(floor);
    }

    @PutMapping("/{id}")
    public Floor putMethodName(@PathVariable Long id, @RequestBody Floor floor) {
        floor.setId(id);
        return floorRepository.save(floor);
    }

    @DeleteMapping("/{id}")
    public void deleteFloor(@PathVariable Long id) {
        floorRepository.deleteById(id);
    }

}
