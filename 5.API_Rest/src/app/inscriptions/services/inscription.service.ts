import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InscriptionsData } from '../../core/data/inscriptions';
import { Inscription } from '../../core/models/inscription';

@Injectable()
export class InscriptionService {
  inscriptions: Inscription[] = InscriptionsData.inscriptions;
  inscriptionsSubject: BehaviorSubject<Inscription[]>;

  constructor(
    private http: HttpClient
  ) {
    this.inscriptionsSubject = new BehaviorSubject<Inscription[]>(this.inscriptions);
  }

  getInscriptions(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(`${environment.api}/inscriptions`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
    // return this.inscriptionsSubject.asObservable();
  }

  getInscriptionById(id: number) {
    return this.http.get<Inscription>(`${environment.api}/inscriptions/${id}`);
  }

  addInscription(inscription: Inscription) {
    this.http.post<Inscription>(`${environment.api}/inscriptions`, inscription).subscribe(console.log);
  }

  editInscription(inscription: Inscription) {
    this.http.put<Inscription>(`${environment.api}/inscriptions/${inscription.id}`, inscription).subscribe(console.log);
  }

  deleteInscription(id: number) {
    return this.http.delete<Inscription>(`${environment.api}/inscriptions/${id}`);
  }
}
