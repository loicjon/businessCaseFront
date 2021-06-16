import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl = 'http://localhost:8000/api/models';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${(this.apiUrl)}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  /*
    findByGarageName(garageName): Observable<any> {
      return this.http.get(`${this.apiUrl}?garageName=${garageName}`);
    }
  */

  findByModelName(modelName): Observable<any> {
    return this.http.get(`${this.apiUrl}?modelName=${modelName}`);
  }
}
