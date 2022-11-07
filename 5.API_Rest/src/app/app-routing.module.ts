import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: 'index', component: IndexComponent, canActivate: [AuthenticationGuard] },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule), canLoad: [AuthenticationGuard] },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
