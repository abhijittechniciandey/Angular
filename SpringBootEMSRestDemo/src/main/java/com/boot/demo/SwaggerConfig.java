package com.boot.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class SwaggerConfig {

	public SwaggerConfig() {
		System.out.println("Swagger config");
	}
	
	@Bean
	public OpenAPI openApiSpec()
	{
		return new OpenAPI()
				.info(new Info()
						.description("It exposes rest endpoints for employee management system")
						.title("Employee Management System")
						.contact(new Contact().email("contact@techgatha.com"))
						.termsOfService("http://www.techgatha.com")
						
						);
	}
}
