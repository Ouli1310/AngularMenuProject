import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getItemsOrderByPriorite<Type>(url: string): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.apiUrl}/${url}`);
  }

  getItemsByParentIdOrderByPriorite<Type>(url: string, id: number): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.apiUrl}/${url}/${id}`);
  }
}
