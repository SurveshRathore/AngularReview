import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.scss']
})
export class ParentcomponentComponent {
parentForm! : FormGroup;
userData: any = [];
userValue: any;

input(){
  this.userData.push(this.userValue)
}


// constructor(private formBuilder: FormBuilder) {}

// ngOnInit(){
//   this.parentForm = this.formBuilder.group({
//     userValue: ['', Validators.required]
//   })
// }

// get f(){ return this.parentForm.controls}


// onSubmit(){
//   console.log(this.parentForm.value)
//   this.userData.push(this.parentForm.value);
//   console.log(this.userData)
// }



}
