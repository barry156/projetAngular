import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import{employee} from "../model/employee.model";
import{EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees:employee[] | any;
  searchtext:any
  constructor(private employeeservice:EmployeeService,private router:Router){}

  ngOnInit(): void {

    this.employees=this.employeeservice.getAllEmployees();
  }


}
