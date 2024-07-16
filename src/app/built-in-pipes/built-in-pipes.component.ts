import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
   today:Date = new Date();
   text:string = "ABC Tutorial";
   amount:number = 223.343;
   percentValue: number = 0.6798;
   jsonValue: object = {
    name:"ARC Tutorial",
    version:"1"
   }
   myArray:number[] = [1,2,3,23,34,56];

   myObject:{[key:string] :string} = {first:"one",second:"2nd"};
}
