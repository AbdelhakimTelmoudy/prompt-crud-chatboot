import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Employee_1 from "./com/prompt/crudchat/entities/Employee.js";
import client_1 from "./connect-client.default.js";
async function deleteEmployee_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("EmployeeService", "deleteEmployee", { id }, init); }
async function getAllEmployees_1(init?: EndpointRequestInit_1): Promise<Array<Employee_1>> { return client_1.call("EmployeeService", "getAllEmployees", {}, init); }
async function getEmployeeById_1(id: number, init?: EndpointRequestInit_1): Promise<Employee_1 | undefined> { return client_1.call("EmployeeService", "getEmployeeById", { id }, init); }
async function saveEmployee_1(employee: Employee_1, init?: EndpointRequestInit_1): Promise<Employee_1> { return client_1.call("EmployeeService", "saveEmployee", { employee }, init); }
async function updateEmployee_1(id: number, employeeDetails: Employee_1, init?: EndpointRequestInit_1): Promise<Employee_1> { return client_1.call("EmployeeService", "updateEmployee", { id, employeeDetails }, init); }
export { deleteEmployee_1 as deleteEmployee, getAllEmployees_1 as getAllEmployees, getEmployeeById_1 as getEmployeeById, saveEmployee_1 as saveEmployee, updateEmployee_1 as updateEmployee };
