package com.br.grifo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.grifo.model.TypeHardware;
import com.br.grifo.repository.TypeRepository;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/type")
public class TypeController {
    @Autowired
    private TypeRepository typeRepository;

    @GetMapping
    public List<TypeHardware> getAllType() {
        return typeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<TypeHardware> getTypeById(@PathVariable Long id) {
        return typeRepository.findById(id);
    }

    @PostMapping
    public TypeHardware createType(@RequestBody TypeHardware typeHardware) {
        return typeRepository.save(typeHardware);
    }

    @PutMapping("/{id}")
    public TypeHardware putTypeHardware(@PathVariable Long id, @RequestBody TypeHardware typeHardware) {
        typeHardware.setId(id);
        return typeRepository.save(typeHardware);   
    }

    @DeleteMapping("/{id}")
    public void deleteType(@PathVariable Long id) {
        typeRepository.deleteById(id);
    }
}
