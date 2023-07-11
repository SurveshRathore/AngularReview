import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  
  minDate: Date;

  // ngOnInit(){
  //   this.dateValidate();
  // }

  constructor(){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear-0, 0, 1);
  }

  // dateValidate(){
  //   const currentYear = new Date().getFullYear();
  // console.log(this.currentYear);
  // this.minDate = new Date(this.currentYear-1);
  // }
  
  
}
