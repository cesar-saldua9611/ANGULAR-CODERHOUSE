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
      student: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required])
    });
    
    this.activatedRouteSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
      if (this.id > 0) {
        this.isEdit = true;

        this.inscriptionServiceSubscription = inscriptionService.getInscriptionById(this.id).subscribe((inscription: Inscription) => {
          if (inscription != null) {
            this.inscriptionForm = formBuilder.group({
              studentId: new FormControl(inscription.student, [Validators.required]),
              courseId: new FormControl(inscription.course, [Validators.required])
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
      student: this.inscriptionForm.value.student,
      course: this.inscriptionForm.value.course
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
