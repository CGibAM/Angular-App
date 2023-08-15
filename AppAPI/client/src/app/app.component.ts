import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Dating App!!';
  users: any;

  constructor(private http : HttpClient){}  //Dependecy injection, we inject the http import from angular/common

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({ //we use this because http is injected as a dependecy and now belongs to the class
      next: response => this.users = response, //like a fetch request, next is then
      error: error =>console.log(error), //like a fetch catch
      complete : () => console.log("Request completed")
    }); 
  }
}
