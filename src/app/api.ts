import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddNewEmployee } from './component/addNewEmployee';

@Injectable({
  providedIn: 'root',
})
export class Api {
 employees: any[] = [];  // ⭐ Stores data from JSON SERVER

  constructor(private http: HttpClient) {}

  // ⭐ API CALL TO GET DATA
  getAllEmployees() {
    return this.http.get<any[]>("http://localhost:3000/posts");
  }
  
  //post method
  addNewEmployee(data: AddNewEmployee){
          return this.http.post<AddNewEmployee>("http://localhost:3000/posts", data);
  }
}
