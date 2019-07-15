import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { Observable, of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public apiURL = 'http://localhost:50148/';

  constructor(private httpClient: HttpClient) { }
 // This tutorial is by DotNet Techy YouTube Channel
    // For more info about channel You can visit this link
    //  https://www.youtube.com/c/dotnettechy
  ValidateUser(user: any)  {
    const userData = 'username = ' + user.UserName + '&password =' + user.Password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True' });

    return this.httpClient.post(this.apiURL + '/token', userData, { headers: reqHeader })
    .pipe(
      map(res => res),
       catchError( this.errorHandler)
      );
  }
  getClaims() {
    const reqHeader = new HttpHeaders({ Authorization: 'Bearer ' + this.getToken()});
    reqHeader.append('Content-Type', 'application/json');
    return this.httpClient.get(this.apiURL + 'api/Users', { headers: reqHeader })
    .pipe(
      map(res => res),
       catchError( this.errorHandler)
      );
  }
  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
  storeToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  removeToken() {
    return localStorage.removeItem('token');
  }
  storeRole(role: any) {
    this.removeRole();
    localStorage.setItem('role', JSON.stringify(role));
  }
  getRole() {
    // return localStorage.getItem("role");
    return JSON.parse(localStorage.getItem('role'));
  }
  removeRole() {
    return localStorage.removeItem('role');
  }
  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
}
}
