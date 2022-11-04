import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }

  addEmployee(emp:Employee)
  {
    return this.http.post(`${this.url}/employees`, emp);
  }

  deleteEmployee(id:number)
  {
   return  this.http.delete(`${this.url}/employees/${id}`)
  }
}
