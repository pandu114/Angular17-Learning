import { Component } from '@angular/core';
import { CrewDesginationsComponent } from '../crew-desginations/crew-desginations.component';
@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewDesginationsComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
  messageForComponent: string = "From Parent";
  userToken: string = "sureshhashkeyvalue";
  receivedMessage:string="";
  receivingMessage(message: string): void{
    this.receivedMessage = message
  }
}
