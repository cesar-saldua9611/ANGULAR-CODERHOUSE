import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentFormComponent } from "./components/student-form/student-form.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentComponent } from "./components/student/student.component";

const routes: Routes = [
    { path: 'list', component: StudentListComponent },
    { path: 'add', component: StudentFormComponent },
    { path: 'edit', component: StudentFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule { }