<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="com.hmart.util.*"%>
<%
	String output ="";
	output = HttpUtil.sendHttpConnection("http://192.168.1.202:8090/test.jsp");
	out.print(output);
%>