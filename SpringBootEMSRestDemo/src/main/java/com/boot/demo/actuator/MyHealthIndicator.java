package com.boot.demo.actuator;

import java.net.URL;
import java.net.URLConnection;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;
	
@Component
public class MyHealthIndicator implements HealthIndicator{

	public MyHealthIndicator() {
		System.out.println("health");
	}
	@Override
	public Health health() {
		Health health = null;
		health = check()==true ? 
				Health.up().withDetail("success", "active internet").build()
				:Health.down().withDetail("failure", "internet down").build();
		return health;
	}
	private boolean check()
	{
		boolean flag = false;
		try {
			URL url = new URL("http:/www.googl.com");
			URLConnection con = url.openConnection();
			con.connect();
			flag = true;
		}catch(Exception e )
		{
			return flag;
		}
		return flag;
	}

}
