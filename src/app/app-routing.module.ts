import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
    { path:'students', loadChildren:'../app/students/students.module#StudentsModule' },
    { path:'student-details/:id', loadChildren:'../app/student-details/student-details.module#StudentDetailsModule' },
    { path: '', redirectTo: '', pathMatch: 'full' }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
    providers:[]
})

export class AppRoutingModule {

}