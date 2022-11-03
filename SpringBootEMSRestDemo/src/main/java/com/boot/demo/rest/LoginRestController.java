
package com.boot.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boot.demo.entity.JwtResponse;
import com.boot.demo.entity.LoginUser;
import com.boot.demo.service.EmployeeService;
import com.boot.demo.service.LoginUserDetailsService;
import com.boot.demo.util.JwtUtility;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
class Login
{
	private String username;
	private String password;
}
@RestController
@CrossOrigin//(methods = RequestMethod.POST, origins = "*")
public class LoginRestController {

	@Autowired
	EmployeeService employeeService;

	@Autowired
	private JwtUtility jwtUtility;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private LoginUserDetailsService lDetailsService;
	
	@PostMapping("/auth")
	public ResponseEntity<JwtResponse> authenticateUser(
			@RequestBody LoginUser user)
	{
		System.out.println("Authentication "+user.getUsername());
		
		try {
			authenticationManager.authenticate(new 
					UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
					);
		}catch(BadCredentialsException e)
		{
			ResponseEntity.status(HttpStatus.BAD_REQUEST);
		}
		final UserDetails userDetails = lDetailsService.loadUserByUsername(user.getUsername());
		final String jwt = jwtUtility.generateToken(userDetails);
		JwtResponse resp = new JwtResponse();
		resp.setJwt(jwt);
		System.out.println(resp.getJwt());
		return ResponseEntity.ok(resp);
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<AppResponse> loginEmployee(@RequestBody Login login){
//		System.out.println("email "+login.getUsername());
//		System.out.println("password "+login.getPassword());
//		try {
//			if(employeeService.loginEmployee(login.getUsername(), login.getPassword()))
//				return ResponseEntity.ok()
//						.body(new AppResponse(Messages.SUCCESS, "Valid"));
//		}catch(InvalidCredentialsException e) {
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//					.body(new AppResponse(Messages.FAILURE, e.getMessage()));
//		}
//		return ResponseEntity.ok()
//				.body(new AppResponse(Messages.SUCCESS, "Valid"));
//	}
	//	@PostMapping("/login")
	//	public ResponseEntity<AppResponse> loginEmployee(@RequestParam String username,
	//			@RequestParam String password)
	//	{
	//		System.out.println("email "+username);
	//		System.out.println("password "+password);
	//		return ResponseEntity.ok()
	//				.body(new AppResponse(Messages.SUCCESS, "Valid"));
	//	}

}
