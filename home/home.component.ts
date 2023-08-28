import { Component } from '@angular/core';
import { AngLifeComponent } from '../ang-life/ang-life.component';
import { DataModel } from '../models/angLife.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  count:number = 0;
  test: boolean = false;

  obj: DataModel = {id: 10, name: "sarvesh"}

  constructor(){
    console.log("Hello from parent using constructor");
  }
  counter(){
    this.count++;
    this.test= !this.test;
    this.obj.id = this.count;
  }

  ngOnInit(){
    console.log("Hello from parent using ngOnInit");
  }
}
