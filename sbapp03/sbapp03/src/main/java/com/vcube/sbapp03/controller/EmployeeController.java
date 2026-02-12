package com.vcube.sbapp03.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vcube.sbapp03.model.Employee;
import com.vcube.sbapp03.service.EmployeeService;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:5173") 
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("insertEmp")
	Employee insertEmp(@RequestBody Employee employee) {
		return employeeService.insertEmployee(employee);
	}
	
	@GetMapping("getEmpList")
	List<Employee> getEmpLIst() {
		return employeeService.getEmpLIst();
	}
	
	@GetMapping("getEmpById/{eid}")
	Employee getEmployeeInfo(@PathVariable("eid")long eid) {
		return employeeService.getEmpById(eid);
	}
	
	@GetMapping("getEmpByEphone/{ephone}")
	Employee GetEmployeeEphone(@PathVariable("ephone")long ephone) {
		return employeeService.getEmpByEphone(ephone);
	}
	
	@PostMapping("updateEmp/{eid}")
	Employee updateEmployee(@RequestBody Employee employee, @PathVariable("eid")long eid) {
	Employee existedEmp = employeeService.getEmpById(eid);
	existedEmp.setAge(employee.getAge());
	existedEmp.setCity(employee.getCity());
	existedEmp.setEname(employee.getEname());
	existedEmp.setEphone(employee.getEphone());
	existedEmp.setEsal(employee.getEsal());
	
	return employeeService.updateEmployee(employee);
	}
	
	@DeleteMapping("deleteEmp/{eid}")
	String deleteEmploee(@PathVariable("eid")long eid) {
		return employeeService.deleteEmpById(eid);
	}

}
