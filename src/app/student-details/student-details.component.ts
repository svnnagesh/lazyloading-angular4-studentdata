import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/students.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student;
  id:number;

  constructor(private studentsService:StudentService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      this.student = this.studentsService.getStudent(this.id);
    })

    //this.student.dob = new Date();

   }

}
