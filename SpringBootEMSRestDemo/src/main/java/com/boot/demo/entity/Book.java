package com.boot.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
//@ToString
@AllArgsConstructor
@Entity
public class Book {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int bookid;
	private String title;
	private int year;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="authorid")
	Author author;

	@Override
	public String toString() {
		return "Book [bookid=" + bookid + ", title=" + title + ", year=" + year + "]";
	}
}
