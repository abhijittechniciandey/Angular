package com.boot.demo.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.boot.demo.service.LoginUserDetailsService;
import com.boot.demo.util.JwtUtility;

@Component
public class JwtFilter  extends OncePerRequestFilter{

	@Autowired
	private LoginUserDetailsService userservice;
	
	@Autowired
	private JwtUtility jwtutil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String header = request.getHeader("Authorization");
		String username = null;
		String jwt = null;
		System.out.println("***************************");
		System.out.println(header);
		System.out.println(request.getHeader("authorization"));
		if(header!=null && header.startsWith("Bearer"))
		{
			System.out.println("get token");
			jwt = header.substring(7);
			System.out.println(jwt);
			username = jwtutil.extractUsername(jwt);
			
		}
		if ( username!=null && SecurityContextHolder.getContext().getAuthentication()==null)
		{
			System.out.println("set security context");
			UserDetails userDetails = this.userservice.loadUserByUsername(username);
			if(jwtutil.validateToken(jwt, userDetails)) {
				System.out.println("validate token");
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		filterChain.doFilter(request, response);
	}
	

	
}
