package com.boot.demo.service;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.boot.demo.entity.LoginUser;
import com.boot.demo.repository.LoginUserRepo;


@Service
public class LoginUserDetailsService implements  UserDetailsService{

	@Autowired
	private LoginUserRepo loginUserRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("Username "+username);
		Optional<LoginUser> loginuser = loginUserRepo.findById(username);
		System.out.println(loginuser);
		return loginuser.map(user -> new User(user.getUsername(), 
				user.getPassword(),
				Arrays.stream(user.getRole().split(","))
				.map(role -> new SimpleGrantedAuthority(role))
				.collect(Collectors.toList())
				)).orElseThrow(()-> new UsernameNotFoundException("Invalid Credientials"));
				
	}

}
