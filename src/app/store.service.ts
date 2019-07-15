import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { Userss, Product } from './user';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  public apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient  ) {
  }
  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }

  getAllProducts() {
    return this.http.get(this.apiURL)
        .pipe(
            map(res => res),
            catchError( this.errorHandler)
        );
  }

  addUser(admin) {
    return this.http.post('http://localhost:3000/users', admin);
  }
  addProduct(shop) {
    return this.http.post('http://localhost:3000/products', shop);
  }
  addDetail(shop) {
    return this.http.post('http://localhost:3000/details', shop);
  }
  getDetail(): Observable<Userss[]> {
    return this.http.get<Userss[]>( 'http://localhost:3000/details');
  }

  getUser(): Observable<Userss[]> {
    return this.http.get<Userss[]>( 'http://localhost:3000/users');
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( 'http://localhost:3000/products');
  }
  deleteProducts(id) {
    if (confirm('Are you sure?')) {
      const url = `http://localhost:3000/products/${id}`;
      return this.http.delete(url);

    }
  }
  deleteOrder(id) {
    if (confirm('Are you sure?')) {
      const url = `http://localhost:3000/details/${id}`;
      return this.http.delete(url);

    }
  }
  deleteUsers(id) {
    if (confirm('Are you sure?')) {
      const url = `http://localhost:3000/users/${id}`;
      return this.http.delete(url);
    }
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  addProductToCart(product: Product[] ) {
    localStorage.setItem('products', JSON.stringify(product));
  }
  getProductFromCart() {
    return JSON.parse(localStorage.getItem( 'products'));
  }
  updateCartCount(count: number) {
    this.currentCartCount.next(count);
  }

}

