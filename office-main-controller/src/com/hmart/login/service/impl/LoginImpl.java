package com.hmart.login.service.impl;

import java.sql.SQLException;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.hmart.login.service.LoginDto;
import com.hmart.login.service.LoginService;

@Component
public class LoginImpl implements LoginService {
	@Resource(name="loginDao")
	private LoginDao loginDao;
	
	public LoginDto getLoginInfo(String sId, String sPassword) throws SQLException { 
		return LoginDto a;
	}
}
