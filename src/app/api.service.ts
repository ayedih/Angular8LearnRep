import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

import { throwError } from "rxjs";
import { retry, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  /*send HTTP requests to the server just like any typical REST API server.
 The server will be available from the  http://localhost:3000/  address.*/
  private SERVER_URL = "http://localhost:3000/products";

  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

  constructor(private httpClient: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unkown error!";
    if (error.error instanceof ErrorEvent) {
      //Clien-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      //server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(",");
    var links = {};
    parts.forEach(p => {
      let section = p.split(";");
      var url = section[0].replace(/<(.*)/, "$1").trim();
      var name = section[1].replace(/rel="(.*)"/, "$1").trim();
      links[name] = url;
    });

    this.first = links["first"];
    this.last = links["last"];
    this.prev = links["prev"];
    this.next = links["next"];
  }

  public sendGetRequest() {
    // Add safe, URL encoded _page and _limit parameters

    return this.httpClient
      .get(this.SERVER_URL, {
        params: new HttpParams({ fromString: "_page=1&_limit=20" }),
        observe: "response"
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
          console.log(res.headers.get("Link"));
          this.parseLinkHeader(res.headers.get("Link"));
        })
      );

    /*  We added the  observe  option with the  response 
     value in the options parameter of the  get()  method
 so we can have the full HTTP response with headers.
 */

 /* Next, we use the RxJS  tap()  operator
  for parsing the Link header before returning the final Observable. */

  /* map : Intercepts each emission on the source and runs a function,
   but returns an output which is identical to the source as long as errors don't occur.
 */

 /* the  sendGetRequest()  is now returning an Observable with a full HTTP response, */
  }


  public sendGetRequestToUrl(url: string){

    /* This method is similar to  sendGetRequest()  
    except that it takes the URL to which we need to send an HTTP GET request. */
    return this.httpClient.get(url, { observe: "response"}).pipe(retry(3),
    catchError(this.handleError),
    tap(res => {
      console.log(res.headers.get('Link'));
      this.parseLinkHeader(res.headers.get('Link'));
    }));
  }
}
