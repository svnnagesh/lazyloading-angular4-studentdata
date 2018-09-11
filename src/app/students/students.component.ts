import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/students.service';
import { Students } from '../models/students.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students;
  id;

  constructor(private studentsService:StudentService, private router:Router) { }

  ngOnInit() {
   this.students = this.studentsService.students();
  }

  getStudentDetails(id) {
    this.router.navigate(['/student-details', id])
  }

  

}
