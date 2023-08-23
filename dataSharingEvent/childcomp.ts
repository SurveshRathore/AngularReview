import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent {

  
  itemList = [
    {Id: 1, Name: "Sarvesh"},
    {Id: 2, Name: "Survesh"},
    {Id: 3, Name: "Anil"},
    {Id: 4, Name: "Naveen"},
    {Id: 5, Name: "Satya"},
    {Id: 6, Name: "Akhil"},
    {Id: 7, Name: "Ganesh"},
    {Id: 8, Name: "Mahesh"}
  ]

  
  @Output () childEvent = new EventEmitter<any>();

  sendList(){
    this.childEvent.emit(this.itemList)
  }

  
}
