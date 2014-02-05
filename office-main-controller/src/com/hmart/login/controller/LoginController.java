package com.hmart.login.controller;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hmart.login.service.LoginDto;
import com.hmart.login.service.LoginService;

@Controller
public class LoginController {
	@Resource(name="sampleImpl")
	SampleService sampleImpl;
	
	/**
	 * test
	 * @param req
	 * @param res
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/sample.do",params="method=test")
	public ModelAndView test(HttpServletRequest req, HttpServletResponse res) throws Exception{
		ModelAndView mav = new ModelAndView();
		List<LoginDto> list = sampleImpl.getStateList();
		mav.addObject("list",list);
		mav.setViewName("sample/test");
		return mav;
	}
	
}