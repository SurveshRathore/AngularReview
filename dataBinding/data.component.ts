import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class Comp1Component {

  

  inter: string = 'Hello';
  btnType:boolean = false;

  title: string = 'Event Binding';
  name:any;
 
  changeTitle(){
    this.title = "Event Binding Button click"
  }
}
