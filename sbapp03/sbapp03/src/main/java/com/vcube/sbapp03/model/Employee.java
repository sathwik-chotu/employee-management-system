package com.vcube.sbapp03.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee9")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long eid;
	private String ename;
	private double esal;
	private long ephone;
	private int age;
	private String city;
	public long getEid() {
		return eid;
	}
	public void setEid(long eid) {
		this.eid = eid;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public double getEsal() {
		return esal;
	}
	public void setEsal(double esal) {
		this.esal = esal;
	}
	public long getEphone() {
		return ephone;
	}
	public void setEphone(long ephone) {
		this.ephone = ephone;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	

}
