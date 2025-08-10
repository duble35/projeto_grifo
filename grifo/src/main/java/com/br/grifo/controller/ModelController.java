package com.br.grifo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    
    @GetMapping
    public Optional<ModelHardware> getModelById(@PathVariable Long id) {
        return modelRepository.findById(id);
    }

    

}
