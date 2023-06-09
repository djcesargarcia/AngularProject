import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLoation!: Housinglocation;
}
