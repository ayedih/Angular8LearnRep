import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpResponse } from "@angular/common/http";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: any[];

  constructor(public apiService: ApiService) {
    if (this.products) {
      console.log("products length is ", this.products.length);
    }
  }

  ngOnInit() {
    this.apiService
      .sendGetRequest()
     /*  .pipe(takeUntil(this.destroy$)) */
      .subscribe((res: HttpResponse<any>) => {
        console.log("result 1 is ",res);
        this.products = res.body;
      });
  }

  public firstPage() {
    this.products = [];
    this.apiService
      .sendGetRequestToUrl(this.apiService.first)
      /* .pipe(takeUntil(this.destroy$)) */
      .subscribe((res: HttpResponse<any>) => {
        console.log("First result is ",res);
        this.products = res.body;
      });
  }

  public previousPage() {
    if (this.apiService.prev !== undefined && this.apiService.prev !== "") {
      this.products = [];
      this.apiService
        .sendGetRequestToUrl(this.apiService.first)
     /*    .pipe(takeUntil(this.destroy$)) */
        .subscribe((res: HttpResponse<any>) => {
          console.log("Prev result is ",res);
          this.products = res.body;
        });
    }
  }

  public nextPage() {
    if (this.apiService.next !== undefined && this.apiService.prev !== "") {
      this.products = [];
      this.apiService
        .sendGetRequestToUrl(this.apiService.first)
       /*  .pipe( takeUntil(this.destroy$) ) */
        .subscribe((res: HttpResponse<any>) => {
          console.log("Next result is ",res);
          this.products = res.body;
        });
    }
  }

  public lastPage() {
    this.products = [];
    this.apiService
      .sendGetRequestToUrl(this.apiService.last)
      /* .pipe( takeUntil(this.destroy$) ) */
      .subscribe((res: HttpResponse<any>) => {
        console.log("Last result is ",res);
        this.products = res.body;
      });
  }
}
