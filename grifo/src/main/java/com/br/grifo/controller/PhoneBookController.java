package com.br.grifo.controller;

import com.br.grifo.model.PhoneBook;
import com.br.grifo.repository.PhoneBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/phonebook")
public class PhoneBookController {

    @Autowired
    private PhoneBookRepository phoneBookRepository;

    @GetMapping
    public List<PhoneBook> getPhoneAll(){
        return phoneBookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<PhoneBook> getPhoneById(@PathVariable Long phoneBook){
        return phoneBookRepository.findById(phoneBook);
    }

    @PostMapping
    public PhoneBook createPhone(@RequestBody PhoneBook phoneBook){
        return phoneBookRepository.save(phoneBook);
    }

    @PutMapping("/{id}")
    public PhoneBook updatePhone(@PathVariable Long id, @RequestBody PhoneBook phoneBook){
        phoneBook.setId(id);
        return phoneBookRepository.save(phoneBook);
    }

    @DeleteMapping("/{id}")
    public void deletePhone(@PathVariable Long id){
        phoneBookRepository.deleteById(id);
    }
}
