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
    //find current year
    const currentYear = new Date().getFullYear();
    //find current month
    const currentMonth = new Date().getMonth();
    //find current day
    const currentDay  = new Date().getDate();
    // const currentYear = 2022;
    // const currentMonth = 7;
    // const currentDay  = 22
    console.log("currentYear",currentYear);
    console.log("currentMonth",currentMonth);
    console.log("currentDay",currentDay);

    set current date
    this.minDate = new Date(currentYear- 0, currentMonth-0, currentDay-0);
    this.minDate = new Date(currentYear- 0, 0, 1);
    console.log(this.minDate);
    
  }

  // dateValidate(){
  //   const currentYear = new Date().getFullYear();
  //   console.log(currentYear);
    
  // //console.log(this.currentYear);
  // this.minDate = new Date(currentYear-1);
  // }
  
  
}
