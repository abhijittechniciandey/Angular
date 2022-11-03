package com.boot.demo.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.boot.demo.entity.Author;
import com.boot.demo.entity.Book;
import com.boot.demo.repository.AuthorRepository;
import com.boot.demo.repository.BookRepository;
//SOAP (XML) vs REST (Architecture )
	// Representational State Transfer
	// webservice => REST API
	/**
	 * 
	 * URL -> http://localhost:8080/getWeather.html
	 * 
	 * NOUN / Verbs ( http methods)
	 * URI => http://localhost:8080/weather
	 * 
	 * 
	 * HTTP methods -> verbs
	 * GET -> fetch
	 * POST -> insert
	 * PUT -> update
	 * DELETE -> delete
	 * 
	 * HTTP Status
	 * 1xx
	 * 2xx
	 * 3xx
	 * 4xx
	 * 5xx
	 * 
	 * Http headers
	 */
@RestController
@RequestMapping("/rest")
public class HelloRestController {

	
	@Autowired
	private AuthorRepository repo;
	
	@Autowired
	private BookRepository brepo;
	
	@GetMapping
	public String getData()
	{
		return "{\"message\":\"fetching data\"}";
	}
	@GetMapping("/list")
	
	public List<String> getListData()
	{	
		return Arrays.asList("India","UK","USA");
	}
	//import org.springframework.http.MediaType;
	@GetMapping(path = "/authors", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	@Transactional
	public List<Author> getAuthorsData()
	{
		List<Author> authors = new ArrayList<>();
		this.repo.findAll().forEach(author ->{
			Hibernate.initialize(author.getBooks());
			authors.add(author);
		});
		return authors;
		//return Arrays.asList(new Author(1, "JK Rowling", null),new Author(2, "Syndney Sheldon",null));
	}
	
	@GetMapping(path = "/books", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Book> getBooksData()
	{
		List<Book> books = new ArrayList<>();
		this.brepo.findAll().forEach(books::add);
		return books;
		//return Arrays.asList(new Author(1, "JK Rowling", null),new Author(2, "Syndney Sheldon",null));
	}
	//http://localhost:8080/rest/20
	// path parameter
	@GetMapping("/{id}")
	public Author getAuthorById(@PathVariable int id)
	{
		System.out.println("Id "+id);
		Author author = new Author();
		author.setAid(id);
		author.setName("Dummy nme");
		//String message = "fetching "+id;
		return author;
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public Author postData(@RequestBody Author author)
	{
		System.out.println(author);
		Author a1 = repo.save(author);
//		for(Book book : author.getBooks()) {
//			book.setAuthor(a1);
//			brepo.save(book);
//		}
		return author;
	}
	@PutMapping
	public String updateData()
	{
		return "{\"message\":\"updating data\"}";
	}
	@DeleteMapping
	public String deleteData()
	{
		return "{\"message\":\"deleting data\"}";
	}
}
