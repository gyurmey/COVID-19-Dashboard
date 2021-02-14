import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { Data } from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
datasUrl:string = 'https://api.apify.com/v2/key-value-stores/OHrZyNo9BzT6xKMRD/records/LATEST?disableRedirect=true';
  
  constructor(private http:HttpClient) { }

  getDatas():Observable<any> {
  return this.http.get<any>(this.datasUrl);
  }
}
