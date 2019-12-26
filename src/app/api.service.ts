import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

/*send HTTP requests to the server just like any typical REST API server.
 The server will be available from the  http://localhost:3000/  address.*/
  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
}
