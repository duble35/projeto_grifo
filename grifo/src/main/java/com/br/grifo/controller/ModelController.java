package com.br.grifo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.br.grifo.model.ModelHardware;
import com.br.grifo.repository.ModelRepository;

@RestController
@RequestMapping("/model")
public class ModelController {
    
    @Autowired
    private ModelRepository modelRepository;

    @GetMapping
    public List<ModelHardware> getModelAll() {
        return modelRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<ModelHardware> getModelById(@PathVariable Long id) {
        return modelRepository.findById(id);
    }

    @PostMapping
    public ModelHardware createModel(@RequestBody ModelHardware model) {
        return modelRepository.save(model);
    }

    @PutMapping("/{id}")
    public ModelHardware updateModel(@PathVariable Long id, @RequestBody ModelHardware model) {
        model.setId(id);
        return modelRepository.save(model);
    }

    @DeleteMapping("/{id}")
    public void deleteModel(@PathVariable Long id) {
        modelRepository.deleteById(id);
    }
}