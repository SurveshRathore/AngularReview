import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent {

  @Input() item: any;

  ngOnInit(){
    console.log(this.item);
  }
  
  

}
