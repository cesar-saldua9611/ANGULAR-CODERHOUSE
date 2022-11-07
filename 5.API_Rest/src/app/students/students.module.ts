import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderFontSizeDirective } from "../core/directives/header-font-size.directive";
import { ConcatStringPipe } from "../core/pipes/concat-string.pipe";
import { StudentFormComponent } from "./components/student-form/student-form.component";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { StudentComponent } from "./components/student/student.component";
import { StudentService } from "./services/student.service";
import { StudentsRoutingModule } from "./students-routing.module";
import { SharedModule } from "../shared/shared.module";

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
        StudentsRoutingModule,
        SharedModule
    ],
    providers: [
        StudentService
    ]
})
export class StudentsModule { }