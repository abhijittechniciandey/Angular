package com.boot.demo;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.boot.demo.entity.LoginUser;
import com.boot.demo.filter.JwtFilter;
import com.boot.demo.repository.LoginUserRepo;
import com.boot.demo.service.LoginUserDetailsService;

// https://www.baeldung.com/spring-deprecated-websecurityconfigureradapter
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private LoginUserDetailsService loginUserDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println("authentication...");
		auth.userDetailsService(loginUserDetailsService);
	}
	@Bean
	public AuthenticationManager manager() throws Exception
	{
		return super.authenticationManagerBean();
	}

	@Autowired
	private JwtFilter jwtfilter;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// for JWT authentication
		http.csrf().disable().authorizeRequests().anyRequest().permitAll();
	
//		.authorizeRequests().antMatchers("/","/auth","/rest/**").permitAll()
//		.antMatchers( "/employees/**").hasAnyAuthority("ADMIN","USER")
//		//.antMatchers("/admin").hasAnyAuthority("ADMIN")
//		.anyRequest().authenticated()
//		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//
//		http.cors();
//		http.addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class);
	}
	/*@Bean
CorsConfigurationSource corsConfigurationSource() {
  CorsConfiguration configuration = new CorsConfiguration();
  configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
  configuration.setAllowedMethods(Arrays.asList("GET","POST","PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"));
  configuration.setAllowCredentials(true);
  configuration.setAllowedHeaders(Arrays.asList("Authorization", "Requestor-Type"));
  configuration.setExposedHeaders(Arrays.asList("X-Get-Header"));
  configuration.setMaxAge(3600L);
  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  source.registerCorsConfiguration("/**", configuration);
  return source;
}*/

	@Bean
	public PasswordEncoder encoder()
	{
		return new BCryptPasswordEncoder();
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/h2-console/**");
	}
	@Autowired
	private LoginUserRepo loginUserRepo;
	//@Bean
	public void initialize1()
	{
		loginUserRepo.save(new LoginUser("user1", encoder().encode("user1"), "USER"));
		loginUserRepo.save(new LoginUser("user2",  encoder().encode("user2"), "USER"));
		loginUserRepo.save(new LoginUser("user3",  encoder().encode("user3"), "USER"));
		
		
	}
	
}




