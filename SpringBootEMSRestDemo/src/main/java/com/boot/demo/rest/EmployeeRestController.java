package com.boot.demo.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boot.demo.dto.AppResponse;
import com.boot.demo.dto.Messages;
import com.boot.demo.entity.Employee;
import com.boot.demo.service.EmployeeService;

import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping("/employees")
@CrossOrigin
public class EmployeeRestController {

	@Autowired
	private EmployeeService employeeService;
	
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Employee> getAllEmployees()
	{
		return this.employeeService.getEmployees();
	}
	
//	@ApiResponse(description = "It returns the list of 5 employees by default"
//			)
//	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
//	public Map<String, Object> mapgetAllEmployees(
//		@RequestParam(required = false, defaultValue = "0")	Integer pageno, 
//		@RequestParam(required = false, defaultValue = "5") Integer size){
//		Map<String, Object> map = new HashMap<String, Object>();
//		System.out.println("page no "+pageno);
//		Page<Employee> page = this.employeeService.getFilteredEmployees(pageno, size);
//		map.put("current", page.getNumber());
//		map.put("count",page.getNumberOfElements());
//		map.put("total",page.getTotalElements());
//		map.put("employees", page.getContent());
//		map.put("pages", page.getTotalPages());
//		 return map;
//	}
	
	@GetMapping(path ="/{eid}")//, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getEmployeeById(@PathVariable int eid) {
		System.out.println("Emp id "+eid);
		Employee emp =  this.employeeService.getEmplopyeeById(eid);
		return ResponseEntity.ok(emp);

		//		try {
//			Employee emp =  this.employeeService.getEmplopyeeById(eid);
//			return ResponseEntity.ok(emp);
//		}
//		catch(Exception e)
//		{
//			System.out.println(e.getMessage());
//			//return ResponseEntity.noContent().build();
//			return ResponseEntity.status(HttpStatus.NOT_FOUND)
//					.body(new AppResponse(Messages.FAILURE,e.getMessage()));
//		}
	//	System.out.println(emp);
		
	}
	
	@DeleteMapping("/{eid}")
	public Map<String, String> deleteEmployeeById(@PathVariable int eid)
	{
		Map<String, String> map = new HashMap<String, String>();
			if(this.employeeService.deleteEmployee(eid)) 
				map.put("SUCESS", eid+ " deleted");
		return map;
	}
	@PostMapping
	public Employee insertEmployee(@RequestBody Employee employee)
	{
		return employeeService.insertEmployee(employee);
	}

}
