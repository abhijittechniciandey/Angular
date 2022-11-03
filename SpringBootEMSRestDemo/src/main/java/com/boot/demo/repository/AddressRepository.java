package com.boot.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.boot.demo.entity.Address;

public interface AddressRepository extends PagingAndSortingRepository<Address, Integer> {

}
