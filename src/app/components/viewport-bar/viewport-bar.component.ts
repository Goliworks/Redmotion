import { Component } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewport-bar',
  standalone: true,
  imports: [FormsModule, SliderModule, InputNumberModule],
  templateUrl: './viewport-bar.component.html',
  styleUrl: './viewport-bar.component.scss',
})
export class ViewportBarComponent {
  zoom = 100;
}
