import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ad} from '../../../models/api-model/ad/ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  apiUrl = 'http://localhost:8000/api/ads';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // @ts-ignore
  getAllAd(): Observable<Ad[]>{
    return this.http.get<Ad[]>(this.apiUrl);
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

  findByTitle(title): Observable<any> {
    return this.http.get(`${this.apiUrl}?title=${title}`);
  }

  // tslint:disable-next-line:typedef
  findByBrand(brandName){
    return this.http.get(`${(this.apiUrl)}?brand=/api/brands/${brandName}`);
  }

  // tslint:disable-next-line:typedef
  findByModel(modelName){
    return this.http.get(`${(this.apiUrl)}?model=/api/models/${modelName}`);
  }

  // tslint:disable-next-line:typedef
  findByFuel(type){
    return this.http.get(`${(this.apiUrl)}?fuel=/api/fuels/${type}`);
  }

  /*
  // tslint:disable-next-line:typedef
  findByCar(brandName, modelName, type) {
    return this.http.get(`${(this.apiUrl)}?brand=/api/brands/${brandName}&model=/api/models/${modelName}&fuel=/api/fuels/${type}`);
  }
*/
}

