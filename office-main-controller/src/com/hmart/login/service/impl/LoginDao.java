package com.hmart.login.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;

import com.hmart.login.service.LoginDto;

@Component
public class LoginDao {

	@Resource(name="sqlSession")
	private SqlSession sqlSession;
	
	public LoginDto getLoginInfo(String sId, String sPassword) throws SQLException {
		return sqlSession.selectOne("Login.getLoginInfo");
	}
}
