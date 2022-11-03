package com.boot.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="brand")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductBrand {

	@Id
	@Column(name="brandid")
	private int bid;
	@Column(name="brandname", length=80, nullable = false)
	private String name;
}
