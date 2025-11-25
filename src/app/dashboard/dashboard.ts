import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopCard2Dashboard } from '../top-card2-dashboard/top-card2-dashboard';
import { TopCard3Dashboard } from '../top-card3-dashboard/top-card3-dashboard';
import { TopCard4Dashboard } from '../top-card4-dashboard/top-card4-dashboard';
import { TopCardDashboard } from '../top-card-dashboard/top-card-dashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,TopCard2Dashboard, TopCard3Dashboard, TopCard4Dashboard, TopCardDashboard],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {

  employees: any[] = [];

constructor(private http: HttpClient, private router: Router) {}


   ngOnInit() {
    this.AllEmployees();
  }

deleteEmployee(empId: number) {
  // Optional: ask for confirmation before deleting
  if (confirm('Are you sure you want to delete this employee?')) {
    // Call your API to delete
    this.http.delete(`https://freeapi.miniprojectideas.com/api/EmployeeLeave/DeleteEmployee/${empId}`)
      .subscribe(
        () => {
          // Remove the employee from the local array to update the table immediately
          this.employees = this.employees.filter(emp => emp.EmpId !== empId);
          alert('Employee deleted successfully');
        },
        (error) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete employee. Try again.');
        }
      );
  }
}

    // Navigate to AddNewEmployee component
  addNewEmployee() {
    this.router.navigate(['/AddNewEmployee']);
  }

  // Navigate to EditEmployee component and pass the employee id
  editEmployee(emp: any) {
    this.router.navigate(['/EditEmployee']);
  }
AllEmployees(){
   this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees").subscribe((response:any)=>{
      this.employees = response;
   })
}
}
