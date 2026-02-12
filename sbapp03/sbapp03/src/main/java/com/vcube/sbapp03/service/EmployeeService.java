package com.vcube.sbapp03.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vcube.sbapp03.model.Employee;
import com.vcube.sbapp03.repo.EmployeeRepo;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepo empRepo;
	
	//InsertEmpDetails
	public Employee insertEmployee(Employee employee) {
		return empRepo.save(employee);
	}
	
	//getEmpLIst
	public List<Employee> getEmpLIst() {
		return empRepo.findAll();
		
	}
	
	//getEmpById
	public Employee getEmpById(long eid) {
		return empRepo.findById(eid).orElseThrow(() -> new RuntimeException("EID is not found"));
	}
	
	//getEmpByPhone
	public Employee getEmpByEphone(long ephone) {
		return empRepo.findByEphone(ephone);
	
	}
	
	//updateEmp
	public Employee updateEmployee(Employee employee) {
		return empRepo.save(employee);
	}
	
	//DeleteEmpById
	public String deleteEmpById(long eid) {
		empRepo.deleteById(eid);
		return "Deleted" + eid + "Employee Successfully" ;
	}

}
