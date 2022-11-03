package com.boot.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.boot.demo.entity.Employee;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Integer> {

//	public Optional<Employee> 
//	findByEmail(String email);
	@Query("select password from Employee u where email=:email")
	public String 
	findByEmail(String email);
}
