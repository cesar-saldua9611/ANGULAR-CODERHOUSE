import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InscriptionFormComponent } from "./components/inscription-form/inscription-form.component";
import { InscriptionListComponent } from "./components/inscription-list/inscription-list.component";
import { InscriptionComponent } from "./components/inscription/inscription.component";
import { InscriptionService } from "./services/inscription.service";
import { InscriptionsRoutingModule } from "./inscriptions-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        InscriptionFormComponent,
        InscriptionListComponent,
        InscriptionComponent
    ],
    imports: [
        CommonModule,
        InscriptionsRoutingModule,
        SharedModule
    ],
    providers: [
        InscriptionService
    ]
})
export class InscriptionsModule { }