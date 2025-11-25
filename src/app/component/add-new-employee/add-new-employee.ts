import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-new-employee',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-new-employee.html',
  styleUrl: './add-new-employee.css',
})
export class AddNewEmployee {



  // ⭐ Employee Model
  employee = {
    EmpName: '',
    EmpId: '',
    EmpEmailId: '',
    EmpDesignation: '',
    EmpRole: '',
    EmpCode: '',
    EmpMobile: '',
  };
   // ✅ Inject Router here
  constructor(private router: Router) {}
  // Local array to store employees
  employees: any[] = [];
  // ⭐ Submit
 // Form submission
  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all fields correctly.');
      return;
    }

    // Add the employee to local array
    this.employees.push({ ...this.employee });  // spread operator to copy object

    console.log('Employee added locally:', this.employees);

    // Reset the form
    form.resetForm();

    // Optionally redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}
