package com.br.grifo.repository;

import com.br.grifo.model.PhoneBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneBookRepository extends JpaRepository<PhoneBook,Long> {
}
