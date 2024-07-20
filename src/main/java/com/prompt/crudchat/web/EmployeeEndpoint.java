package com.prompt.crudchat.web;


import com.prompt.crudchat.entities.Employee;
import com.prompt.crudchat.services.EmployeeService;
import com.vaadin.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


public class EmployeeEndpoint {

    private EmployeeService employeeService;

    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeService.getEmployeeById(id);
    }

    public Employee saveEmployee(Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    public void deleteEmployee(Long id) {
        employeeService.deleteEmployee(id);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        return employeeService.updateEmployee(id, employeeDetails);
    }
}
