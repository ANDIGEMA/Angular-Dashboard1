import { Api } from './../../api';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-new-employee',
  imports: [RouterLink, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-new-employee.html',
  styleUrl: './add-new-employee.css',
})
export class AddNewEmployee {
  // ⭐ Employee model
  employee = {
    name: '',
    email: '',
    password: '',
    role: '',
    contact: '',
    department: '',
    gender: ''
  };

  // ⭐ Stores data fetched from JSON SERVER
  employees: any[] = [];

  constructor(private api: Api, private router: Router) {}

  // ⭐ Load all employees when component initializes
  ngOnInit(): void {
    this.getAllEmployees();
  }

  // ⭐ API CALL TO GET DATA
  getAllEmployees() {
    this.api.getAddNewEmployees().subscribe({
      next: (response) => {
        this.employees = res;
        console.log("Employees fetched:", this.employees);
      },
      error: (err) => {
        console.error("Error fetching employees:", err);
      }
    });
  }

  // ⭐ Submit new employee data
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.api.addNewEmployee(this.employee).subscribe({
        next: (res) => {
          console.log('Employee added:', res);
          alert('Employee added successfully!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Error adding employee');
        }
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
