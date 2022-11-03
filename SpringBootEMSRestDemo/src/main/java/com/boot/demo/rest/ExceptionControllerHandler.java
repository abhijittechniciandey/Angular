package com.boot.demo.rest;

import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.boot.demo.dto.AppResponse;
import com.boot.demo.dto.Messages;

// global handler for exceptions
@ControllerAdvice
public class ExceptionControllerHandler {

	public ExceptionControllerHandler() {
		System.out.println("Exception Handler class");
	}
	@ExceptionHandler(EntityNotFoundException.class)
	//@ResponseStatus
	public ResponseEntity<AppResponse> handleEntityNotFoundException(EntityNotFoundException ex)
	
	{
		System.out.println("exception occured");
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new AppResponse(Messages.FAILURE,ex.getMessage()));
	}
}
