import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import employeeData from '../data/mock-employees.json';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees : Employee[] = employeeData.employees;    //Employee list from JSON
  employeeForm: boolean = false;
  newEmployee: any = {};
  editEmployeeForm: boolean = false;
  editedEmployee: any = {};

  constructor() {
   }

  ngOnInit(): void {
  }

  //To display Add employee form
  displayAddEmployeeForm(){
    if (this.employees.length) {
      this.newEmployee = {};
    }
    this.employeeForm = true;
    this.editEmployeeForm = false;
  }

  //To display edit employee form
  displayEditEmployeeForm(employee : Employee){
    if (!employee) {
      this.employeeForm = false;
      return;
    }
    this.editEmployeeForm = true;
    this.employeeForm = false;
    this.editedEmployee = employee;
  }

  //To delete employee
  deleteEmployee(employee : Employee){
    this.employees.splice(this.employees.indexOf(employee), 1);
  }

  //To add employee
  addEmployee(employee : Employee){
    if(employee.firstName != null){
      this.employees.push(employee);
    }
    this.employeeForm = false;
  }

  //To update employee details
  updateEmployee(employee : Employee){
    const temp = this.employees.indexOf(employee);
    this.employees[temp] = employee;
    this.editEmployeeForm = false;
  }

}
