package com.boot.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.boot.demo.entity.Author;

public interface AuthorRepository extends PagingAndSortingRepository<Author, Integer> {

}
