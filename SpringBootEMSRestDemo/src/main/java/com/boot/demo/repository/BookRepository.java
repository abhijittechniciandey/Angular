package com.boot.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.boot.demo.entity.Address;
import com.boot.demo.entity.Book;

public interface BookRepository extends PagingAndSortingRepository<Book, Integer> {

}
