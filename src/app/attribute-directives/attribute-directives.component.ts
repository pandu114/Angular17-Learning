import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  name=""
  isActive = false;
  backgroundColor="blue";
  fontSize="16";
  toggleActive(){
    this.isActive = !this.isActive
  }
  styleUpdate(){
    this.backgroundColor = "green"
    this.fontSize = "20"
  }
}
