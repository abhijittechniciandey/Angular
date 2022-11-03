package com.boot.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.boot.demo.entity.Address;
import com.boot.demo.entity.Employee;
import com.boot.demo.exception.InvalidCredentialsException;
import com.boot.demo.repository.AddressRepository;
import com.boot.demo.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private AddressRepository addressRepository;

	@Transactional
	public Employee insertEmployee(Employee employee) {

		Employee savedEmployee = this.employeeRepository.save(employee);

		Address address = employee.getAddress();
		if(address != null) {
			address.setEmployee(savedEmployee);
			Address savedAddress = this.addressRepository.save(address);
			savedEmployee.setAddress(savedAddress);
		}
		return savedEmployee;	
	}

	public Employee getEmplopyeeById(int eid) {
		System.out.println("Emp service "+eid);
		return this.employeeRepository
				.findById(eid).orElseThrow(()-> new EntityNotFoundException("Employee "+eid+" not found"));
	}
	public List<Employee> getEmployees(){
		List<Employee> employees = new ArrayList<Employee>();
		this.employeeRepository.findAll().forEach(employees::add);
		return employees;
	}
	
	public Page<Employee> getFilteredEmployees(Integer pageno, Integer size){
		
		Pageable pageable = PageRequest.of(pageno, size);
		
		List<Employee> employees = new ArrayList<Employee>();
		return this.employeeRepository.findAll(pageable);

	}

	public Employee updateEmployee(Employee employee) {
		if(!this.employeeRepository.existsById(employee.getEid()))
			throw new EntityNotFoundException("Employee "+employee.getEid()+" not found and cannot be updated");
		return this.employeeRepository.save(employee);		
	}

	@Transactional
	public boolean deleteEmployee(int eid) {
		if(!this.employeeRepository.existsById(eid))
			throw new EntityNotFoundException("Employee "+eid+" not found and cannot be deleted");
		this.employeeRepository.deleteById(eid);
		return true;
	}
	
	public boolean loginEmployee(String email, String password) throws InvalidCredentialsException
	{
//		Optional<Employee> opt = this.employeeRepository.findByEmail(email);
//		if(opt.isPresent())
//		{
//			Employee emp = opt.get();
//			if(emp.getPassword().equals(password))
//				return true;
//		}
		String pwd = this.employeeRepository.findByEmail(email);
		if(pwd!=null)
		{
			//Employee emp = opt.get();
			if(pwd.equals(password))
				return true;
		}
		throw new InvalidCredentialsException("Invalid credentials, Please try again");
	}
}
