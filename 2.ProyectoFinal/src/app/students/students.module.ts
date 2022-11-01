import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderFontSizeDirective } from "../directives/header-font-size.directive";
import { MaterialModule } from "../material.module";
import { ConcatStringPipe } from "../pipes/concat-string.pipe";
import { StudentFormComponent } from "./components/student-form/student-form.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentComponent } from "./components/student/student.component";
import { StudentService } from "./services/student.service";
import { StudentsRoutingModule } from "./students-routing.module";

@NgModule({
    declarations: [
        StudentFormComponent,
        StudentListComponent,
        StudentComponent,
        HeaderFontSizeDirective,
        ConcatStringPipe
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        StudentsRoutingModule
    ],
    providers: [
        StudentService
    ]
})
export class StudentsModule { }