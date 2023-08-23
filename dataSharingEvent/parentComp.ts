import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent {

  
  message:any = [];

  receiveChildEvent($event:string){
    this.message = $event;
  }
}
