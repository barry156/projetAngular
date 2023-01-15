import { Injectable } from '@angular/core';
import {employee} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employee: employee[] = [
    {
      id: 27,
      title: 'boubacar sow',
      dateofbirth: new Date(1982, 12, 19),
      status: 'membres',
      email:'boubacar@gmail.com',
      salaire:1200,


      afficheUrl: 'assets/employee/image1.jpg',
      like: 173,
      note: 4.3,
    },
    {
      id: 28,
      title: 'Mamadou barry',
      dateofbirth: new Date(1985, 12, 19),
      status: 'membres',
      email:'mamadou1565@gmail.com',
      salaire:1300,


      afficheUrl: 'assets/employee/image2.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 29,
      title: 'alphonse',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'alphonde5@gmail.com',
      salaire:1400,


      afficheUrl: 'assets/employee/image3.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 30,
      title: 'oumar',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'Oumar@gmail.com',
      salaire:1500,


      afficheUrl: 'assets/employee/image4.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 31,
      title: 'Albert',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'Oumar@gmail.com',
      salaire:1500,


      afficheUrl: 'assets/employee/image5.jpg',
      like: 196,
      note: 10,

    },
    {
      id: 32,
      title: 'Camus',
      dateofbirth: new Date(1985, 12, 19),
      status: 'employee',
      email:'Camus@gmail.com',
      salaire:1500,

      like: 196,


      afficheUrl: 'assets/employee/image6.jpg',
      note: 10,

    }
  ];
  searchtext="";
  getAllEmployees(): employee[] {
    return this.employee;
  }



}
