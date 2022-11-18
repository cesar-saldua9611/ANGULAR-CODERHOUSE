import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Inscription } from 'src/app/core/models/inscription';
import { InscriptionService } from 'src/app/inscriptions/services/inscription.service';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css']
})
export class InscriptionListComponent implements OnInit, OnDestroy {
  inscriptionServiceGetSubscription!: Subscription;
  inscriptionServiceDeleteSubscription!: Subscription;
  tableColumns: Array<string> = ['fullName', 'name', 'surname', 'age', 'email', 'actions'];
  dataSource: MatTableDataSource<Inscription> = new MatTableDataSource<Inscription>();

  @ViewChild('listFilter') listFilter: any;

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  ngOnDestroy(): void {
    this.inscriptionServiceGetSubscription?.unsubscribe();
    this.inscriptionServiceDeleteSubscription?.unsubscribe();
  }

  refreshTable() {
    this.inscriptionServiceGetSubscription = this.inscriptionService.getInscriptions().subscribe((observer: Inscription[]) => {
      this.dataSource = new MatTableDataSource<Inscription>(observer)

      if(this.listFilter != undefined && this.listFilter.nativeElement.value != '') {
        const searchValue = this.listFilter.nativeElement.value;
        this.dataSource.filter = searchValue.trim();
      }
    });
  }

  filterTable($event: Event) {
    const searchValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim();
  }

  editInscription(id: number) {
    this.router.navigate(['inscriptions/edit', { id: id }]);
  }

  deleteInscription(id: number) {
    this.inscriptionServiceDeleteSubscription = this.inscriptionService.deleteInscription(id).subscribe((observer: Inscription) => {
      this.refreshTable();
    });
  }
}
