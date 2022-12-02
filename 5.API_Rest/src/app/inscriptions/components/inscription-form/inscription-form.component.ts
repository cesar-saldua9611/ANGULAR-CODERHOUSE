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
      studentId: new FormControl('', [Validators.required]),
      courseId: new FormControl('', [Validators.required])
    });
    
    this.activatedRouteSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
      if (this.id > 0) {
        this.isEdit = true;

        this.inscriptionServiceSubscription = inscriptionService.getInscriptionById(this.id).subscribe((inscription: Inscription) => {
          if (inscription != null) {
            this.inscriptionForm = formBuilder.group({
              studentId: new FormControl(inscription.studentId, [Validators.required]),
              courseId: new FormControl(inscription.courseId, [Validators.required])
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
      studentId: this.inscriptionForm.value.studentId,
      courseId: this.inscriptionForm.value.courseId
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
