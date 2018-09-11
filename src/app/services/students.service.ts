import { Students } from '../models/students.model';
import { Observable } from 'rxjs';

export class StudentService {
    private studentsData = [
        {
            id: 1,
            name: 'Nagesh',
            age: 29,
            mobile: 8885798028,
            dob: new Date(1989, 7, 6),
            email: 'svn.nagesh@gmail.com',
            city: 'Hyderabad',
            state: 'Telangana'
        },
        {
            id: 2,
            name: 'Ganesh',
            age: 30,
            mobile: 9966057232,
            dob: new Date(1988, 8, 14),
            email: 'neghani@gmail.com',
            city: 'Hyderabad',
            state: 'Telangana'
        },
        {
            id:3,
            name:'Rohith Reddy',
            age:29,
            mobile:8801048218,
            dob: new Date(1989, 11, 7),
            email:'rohith@codeguruji.com',
            city:'Hyderabad',
            state:'Telangana'
        },
        {
            id:4,
            name:'Bhavesh Guntuka',
            age:32,
            mobile:9014151312,
            dob: new Date(1987, 8, 11),
            email:'bhagesh.guntuka@gmail.com',
            city:'Hyderabad',
            state:'Telangana'
        },
        {
            id:5,
            name:'Vignesh',
            age:29,
            mobile:9014151312,
            dob: new Date(1989, 2, 24),
            email:'vigneshwarrao.v@gmail.com',
            city:'Hyderabad',
            state:'Telangana'
        }
    ]

    students() {
        return this.studentsData;
    }

    getStudent(id:number) {
        return this.studentsData.find(e => e.id === id);
      }

}