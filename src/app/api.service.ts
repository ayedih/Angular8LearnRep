import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

/*send HTTP requests to the server just like any typical REST API server.
 The server will be available from the  http://localhost:3000/  address.*/
  private SERVER_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  public get(){  
    return this.httpClient.get(this.SERVER_URL);  
/*     The method simply invokes the  get()  method of  HttpClient  to send GET requests to the REST API server.
 */	}  
}
