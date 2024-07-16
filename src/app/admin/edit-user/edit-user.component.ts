import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  adminName:string = 'sai';
  anchorUrl:string = "https://google.com";
  disabled:boolean = true;
  imageUrl:string = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png";
  className:string = "c1"

  buttonClicked(){
    this.className = this.className === "c1"?"c2":"c1";
    this.disabled = !this.disabled;
  }
  capctureValue(event:any){
    console.log(event.key);
  }
  onMouseOut(event:any){
    this.className = this.className === "c1"?"c2":"c1";
  }
  onMouseOver(event:any){
    this.className = this.className === "c2"?"c1":"c2";
  }
}
