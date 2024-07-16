import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-crew-desginations',
  templateUrl: './crew-desginations.component.html',
  styleUrl: './crew-desginations.component.scss'
})
export class CrewDesginationsComponent {
 
    @Input() message: string = "";
    @Input() token: string="";

    @Output() messageEvent = new EventEmitter<string>();
    sendMessage(){
      this.messageEvent.emit("Hello from Child to parent ");
    }
}
