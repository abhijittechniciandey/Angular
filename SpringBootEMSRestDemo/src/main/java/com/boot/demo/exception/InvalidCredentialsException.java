package com.boot.demo.exception;

public class InvalidCredentialsException
extends Exception{

	public InvalidCredentialsException(String message) {
		super(message);
	}
}
