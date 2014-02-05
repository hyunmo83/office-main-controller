package com.hmart.login.service;

import java.sql.SQLException;

public interface LoginService {
	public LoginDto getLoginInfo(String sId, String sPassword) throws SQLException;
}
