import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ang-life',
  templateUrl: './ang-life.component.html',
  styleUrls: ['./ang-life.component.scss']
})
export class AngLifeComponent implements OnChanges {

  @Input() data: number = 0;
  @Input() data2: boolean = false;

  constructor(){
    console.log("Hello from Child using constructor");
  }

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
}

ngOnInit(){
  console.log("Hello from Child using ngOnInit");
  
}




}
