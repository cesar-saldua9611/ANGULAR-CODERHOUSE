import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      activeSesion: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(user: User){
    const sesion: Sesion = {
      activeSesion: true,
      activeUser: user
    }

    this.sesionSubject.next(sesion);
  }

  getSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
}