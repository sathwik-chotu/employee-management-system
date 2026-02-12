package com.vcube.sbapp03.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vcube.sbapp03.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

	Employee findByEphone(long ephone);



}
