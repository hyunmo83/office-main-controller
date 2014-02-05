package com.hmart.login.service;

public class LoginDto {	
	
	private String userId;
	private String password;	
	private String EmployeeName;	
	private String nickname;
	private String branchname;	
	private String postcode;
	
	private int deptcode;
	private int branchCode;
	private int seqLevel;
	private int employeeId;
	
	public LoginDto() {}
	
	public LoginDto(String userId, String password, String employeeName,
			String nickname, String branchname, String postcode, int deptcode,
			int branchCode, int seqLevel, int employeeId) {
		super();
		this.userId = userId;
		this.password = password;
		EmployeeName = employeeName;
		this.nickname = nickname;
		this.branchname = branchname;
		this.postcode = postcode;
		this.deptcode = deptcode;
		this.branchCode = branchCode;
		this.seqLevel = seqLevel;
		this.employeeId = employeeId;
	}
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmployeeName() {
		return EmployeeName;
	}
	
	public void setEmployeeName(String employeeName) {
		EmployeeName = employeeName;
	}
	
	public String getNickname() {
		return nickname;
	}
	
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	public String getBranchname() {
		return branchname;
	}
	
	public void setBranchname(String branchname) {
		this.branchname = branchname;
	}
	
	public String getPostcode() {
		return postcode;
	}
	
	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}
	
	public int getDeptcode() {
		return deptcode;
	}
	
	public void setDeptcode(int deptcode) {
		this.deptcode = deptcode;
	}
	
	public int getBranchCode() {
		return branchCode;
	}
	
	public void setBranchCode(int branchCode) {
		this.branchCode = branchCode;
	}
	
	public int getSeqLevel() {
		return seqLevel;
	}
	
	public void setSeqLevel(int seqLevel) {
		this.seqLevel = seqLevel;
	}
	
	public int getEmployeeId() {
		return employeeId;
	}
	
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
		
} // end LoginDto
