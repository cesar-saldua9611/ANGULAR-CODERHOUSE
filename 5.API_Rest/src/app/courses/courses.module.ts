import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CourseFormComponent } from "./components/course-form/course-form.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseComponent } from "./components/course/course.component";
import { CourseService } from "./services/course.service";
import { CoursesRoutingModule } from "./courses-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        CourseFormComponent,
        CourseListComponent,
        CourseComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        SharedModule
    ],
    providers: [
        CourseService
    ]
})
export class CoursesModule { }