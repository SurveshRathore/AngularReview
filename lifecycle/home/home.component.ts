import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  count:number = 0;
  test: boolean = false;

  constructor(){
    console.log("Hello from parent using constructor");
  }
  counter(){
    this.count++;
    this.test= !this.test;
  }

  ngOnInit(){
    console.log("Hello from parent using ngOnInit");
  }
}
