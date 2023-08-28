import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataModel } from '../models/angLife.models';

@Component({
  selector: 'app-ang-life',
  templateUrl: './ang-life.component.html',
  styleUrls: ['./ang-life.component.scss']
})
export class AngLifeComponent implements OnChanges {

  @Input() data: number = 0;
  @Input() data2: boolean = false;
  @Input() nameData: DataModel = {id: 0, name: ''};

  constructor(){
    console.log("Hello from Child using constructor");
  }

  ngDoCheck(){
    console.log(this.nameData);
    
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
}

ngOnInit(){
  console.log("Hello from Child using ngOnInit");
  
}




}
