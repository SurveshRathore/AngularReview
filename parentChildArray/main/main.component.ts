import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  inputValue: any;
  userInput: any = [];

  Array:any = [{
    'id':1,
    'name': 'ABC',
    'number': 897
  },
  {
    'id':2,
    'name': 'CDE',
    'number': 8975
  }
]

  Submit(){
    this.userInput.push(this.inputValue);
    console.log(this.userInput);
    
  }
}
