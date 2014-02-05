package com.hmart.util;

import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;

public abstract class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//String str = HttpUtil.getHttpResult("http://192.168.1.202:8090/test.jsp");
		//System.out.println(str);
		String param="http://192.168.1.202:8090/a.jsp";
		String enParam = URLEncoder.encode(param);
		http%3A%2F%2F192.168.1.202%3A8090%2Fa.jsp
		param = URLEncoder.encode(param);
		System.out.println(url);
		System.out.println(URLDecoder.decode(param));
		
		String str2 = HttpUtil.sendHttpConnection("http://192.168.1.202:8090/test.jsp");
//		System.out.println(str2);		
	}
}
