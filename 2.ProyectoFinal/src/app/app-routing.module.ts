import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'students', component: StudentComponent, children: [
    { path: 'list', component: StudentListComponent },
    { path: 'add', component: StudentFormComponent },
    { path: 'edit', component: StudentFormComponent },
  ] },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
