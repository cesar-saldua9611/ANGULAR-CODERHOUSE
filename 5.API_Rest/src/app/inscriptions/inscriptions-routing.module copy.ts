import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { InscriptionFormComponent } from "./components/inscription-form/inscription-form.component";
import { InscriptionListComponent } from "./components/inscription-list/inscription-list.component";
import { InscriptionComponent } from "./components/inscription/inscription.component";

const routes: Routes = [
    { path: '', component: InscriptionComponent, canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard], children: [
        { path: 'list', component: InscriptionListComponent },
        { path: 'add', component: InscriptionFormComponent },
        { path: 'edit', component: InscriptionFormComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InscriptionsRoutingModule { }