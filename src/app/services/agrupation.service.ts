import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepresentanteResponse {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AgrupationService {
  private apiUrl = 'http://localhost:3000'; // Ajusta a la URL de tu API

  constructor(private http: HttpClient) { }

  crearAgrupation(datosAgrupation: unknown) {
    return this.http.post(`${this.apiUrl}/insertAgrupation`, datosAgrupation);
  }

  crearRepresentative(datosRepresentante: unknown): Observable<RepresentanteResponse> {
    return this.http.post<RepresentanteResponse>(`${this.apiUrl}/insertRepresentative`, datosRepresentante);
  }

  listAgrupations(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.apiUrl}/listAgrupations`);
  }

  deleteAgrupation(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/deleteAgrupation/${id}`);
  }



}
