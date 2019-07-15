import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  Response } from 'selenium-webdriver/http';
import { Observable, of, throwError, pipe} from 'rxjs'
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }
}
