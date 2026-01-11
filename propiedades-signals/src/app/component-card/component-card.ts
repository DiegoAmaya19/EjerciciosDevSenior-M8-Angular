import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-component-card',
  imports: [],
  templateUrl: './component-card.html',
  styleUrl: './component-card.css',
})
export class ComponentCard {
  // @Input({required : true}) item! : Property;

  item = input.required<Property>();
}
