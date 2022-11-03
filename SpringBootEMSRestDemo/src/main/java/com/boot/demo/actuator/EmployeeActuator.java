package com.boot.demo.actuator;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

import com.boot.demo.entity.Employee;

@Component
@Endpoint(id = "emp")
public class EmployeeActuator {

	@ReadOperation
	public Employee fetch()
	{
		return new Employee();
	}
}
