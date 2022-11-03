package com.boot.demo;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.boot.demo.entity.Address;
import com.boot.demo.entity.Author;
import com.boot.demo.entity.Book;
import com.boot.demo.entity.Employee;
import com.boot.demo.entity.LoginUser;
import com.boot.demo.exception.InvalidCredentialsException;
import com.boot.demo.repository.AuthorRepository;
import com.boot.demo.repository.BookRepository;
import com.boot.demo.repository.LoginUserRepo;
import com.boot.demo.service.EmployeeService;

@SpringBootApplication
public class SpringBootEmsRestDemoApplication {

	
	//@Value("${message}")
	private String message;
	
	//@Bean
	public void message()
	{
		System.out.println(env.getProperty("message"));
		System.out.println("\n#################################################\n");
		System.out.println(message);
		System.out.println("\n#################################################\n");
	}
	
	@Autowired
	private Environment env;
	
	public static void main(String[] args) {
		ApplicationContext context =
				SpringApplication.run(SpringBootEmsRestDemoApplication.class, args);
		
//		System.out.println("environment");
//		System.out.println(context.getEnvironment().getProperty("message"));
//		
//		AuthorRepository arepo = context.getBean(AuthorRepository.class);
//		BookRepository brepo = context.getBean(BookRepository.class);
//
//		Author a1 = new Author();
//		
//		a1.setName("JK Rowling");
//		a1.setAid(1);
//
//		Book b1 = new Book();
//		b1.setTitle("Harry Potter and stone");
//		b1.setYear(2010);
//		b1.setAuthor(a1);
//
//		Book b2 = new Book();
//		b2.setTitle("Harry Potter and chambers");
//		b2.setYear(2010);
//		b2.setAuthor(a1);
//		b2.setBookid(2);
//		Set<Book> books = new HashSet<>();
//		books.add(b1);
//		books.add(b2);
//
//		a1.setBooks(books);
//		b1.setBookid(1);

		//arepo.deleteById(3);
		//		arepo.save(a1);
		//		brepo.save(b1);
		//		brepo.deleteById(11);



		//		EmployeeService s = context.getBean(EmployeeService.class);
		//		Employee e1 = new Employee();
		//		//e1.setEid(26);
		//		e1.setEname("Ayush");
		//		e1.setEmail("ayush@test.com");
		//		e1.setPassword("ayush123");
		//		e1.setPhone("3434343456");
		//		Address a1 = new Address();
		//		//a1.setAid(24);
		//		a1.setCity("London");
		//		a1.setCountry("UK");
		//		a1.setZipcode("432121");
		//		e1.setAddress(a1);
		//		s.insertEmployee(e1);
		//		s.deleteEmployee(24);
	}
	
//	@SuppressWarnings("deprecation")
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		System.out.println("cors");
//		return new WebMvcConfigurerAdapter() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**")
//				.allowedMethods("*")
//				.allowedOrigins("http://localhost:4200");
//			}
//		};
//	}
	@Autowired
	private EmployeeService employeeService;


	//@Bean
	public void login()
	{
		try {
			System.out.println(employeeService.loginEmployee("ayush@test.com", "ayush123"));
		} catch (InvalidCredentialsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println();
		try {
			System.out.println(employeeService.loginEmployee("ayush@test.com", "ayush12"));
		} catch (InvalidCredentialsException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		System.out.println();
		try {
			System.out.println(employeeService.loginEmployee("ayush@test.co", "ayush123"));
		} catch (InvalidCredentialsException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
	}

	@Bean
	public void initialize()
	{

		Employee emp = new Employee();
		emp.setEname("Shalini");
		emp.setEmail("shalini@test.com");
		emp.setPassword("shalini123");
		emp.setPhone("9898989898");
		Address addr = new Address();
		//a1.setAid(24);
		addr.setCity("Delhi");
		addr.setCountry("India");
		addr.setZipcode("989898");
		emp.setAddress(addr);
		employeeService.insertEmployee(emp);
		for(int i=1;i<=10;i++)
		{
			Employee e1 = new Employee();
			e1.setEname("Emp "+i);
			e1.setEmail("emp"+i+"@test.com");
			e1.setPassword("emp"+i);
			e1.setPhone(i+"234567890");
			Address a1 = new Address();
			a1.setCity("city "+i);
			a1.setCountry("country "+i);
			a1.setZipcode(i+"234");
			e1.setAddress(a1);
			employeeService.insertEmployee(e1);
		}
		for(int i=11;i<=20;i++)
		{
			Employee e1 = new Employee();
			e1.setEname("Emp "+i);
			e1.setEmail("emp"+i+"@test.com");
			e1.setPassword("emp"+i);
			e1.setPhone(i+"234567890");
			Address a1 = new Address();
			a1.setCity("somecity "+i);
			a1.setCountry("somecountry "+i);
			a1.setZipcode(i+"234");
			e1.setAddress(a1);
			employeeService.insertEmployee(e1);
		}


	}
	@Autowired
	private LoginUserRepo loginUserRepo;
	
//	
	@Autowired
	private PasswordEncoder encoder;
	
	@Bean
	public void initialize1()
	{
		loginUserRepo.save(new LoginUser("user1", encoder.encode("user1"), "USER"));
		loginUserRepo.save(new LoginUser("user2",  encoder.encode("user2"), "USER"));
		loginUserRepo.save(new LoginUser("user3",  encoder.encode("user3"), "USER"));
		loginUserRepo.save(new LoginUser("user4",  encoder.encode("user4"), "USER"));
		loginUserRepo.save(new LoginUser("admin",  encoder.encode("admin123"), "ADMIN"));
	}

}
