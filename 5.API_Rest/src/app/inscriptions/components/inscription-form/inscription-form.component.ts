import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inscription } from 'src/app/core/models/inscription';
import { InscriptionService } from 'src/app/inscriptions/services/inscription.service';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit, OnDestroy {
  inscriptionForm!: FormGroup;
  isEdit: Boolean = false;
  id: number = 0;
  activatedRouteSubscription!: Subscription;
  inscriptionServiceSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private inscriptionService: InscriptionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.inscriptionForm = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(10), Validators.max(100), Validators.pattern('^\\d{1,}$')]),
      email: new FormControl('', [Validators.email, Validators.required])
    });
    
    this.activatedRouteSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
      if (this.id > 0) {
        this.isEdit = true;

        this.inscriptionServiceSubscription = inscriptionService.getInscriptionById(this.id).subscribe((inscription: Inscription) => {
          if (inscription != null) {
            this.inscriptionForm = formBuilder.group({
              name: new FormControl(inscription.name, [Validators.required]),
              surname: new FormControl(inscription.surname, [Validators.required]),
              age: new FormControl(inscription.age, [Validators.min(10), Validators.max(100), Validators.pattern('^\\d{1,}$')]),
              email: new FormControl(inscription.email, [Validators.email, Validators.required])
            });
          }
        })
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription?.unsubscribe();
    this.inscriptionServiceSubscription?.unsubscribe();
  }

  submitForm() {
    let inscription: Inscription = {
      id: this.id,
      name: this.inscriptionForm.value.name,
      surname: this.inscriptionForm.value.surname,
      age: this.inscriptionForm.value.age,
      email: this.inscriptionForm.value.email
    };

    if (this.isEdit) {
      this.inscriptionService.editInscription(inscription);
    }
    else {
      this.inscriptionService.addInscription(inscription);
      this.inscriptionForm.reset();
    }
    this.router.navigate(['inscriptions/list']);
  }
}
