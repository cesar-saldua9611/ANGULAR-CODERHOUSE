import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { CourseFormComponent } from "./components/course-form/course-form.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseComponent } from "./components/course/course.component";

const routes: Routes = [
    { path: '', component: CourseComponent, canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard], children: [
        { path: 'list', component: CourseListComponent },
        { path: 'add', component: CourseFormComponent },
        { path: 'edit', component: CourseFormComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }