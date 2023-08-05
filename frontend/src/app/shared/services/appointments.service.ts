import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private url = environment.api + '/appointments';

  addAppointment(value: any): Observable<Appointment> {
    return this.http.post<Appointment>(this.url, value);
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url);
  }

  constructor(private http: HttpClient) {}
}
