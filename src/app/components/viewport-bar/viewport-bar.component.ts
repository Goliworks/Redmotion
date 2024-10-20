import { Component, inject } from '@angular/core';
import { SliderChangeEvent, SliderModule } from 'primeng/slider';
import { InputNumberInputEvent, InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ChangeZoom } from '../../store/environment/environment.actions';

@Component({
  selector: 'app-viewport-bar',
  standalone: true,
  imports: [FormsModule, SliderModule, InputNumberModule],
  templateUrl: './viewport-bar.component.html',
  styleUrl: './viewport-bar.component.scss',
})
export class ViewportBarComponent {
  protected zoom = 100;
  private store = inject(Store);

  protected changeZoom(zoom: SliderChangeEvent | InputNumberInputEvent) {
    if (typeof zoom.value === 'number') {
      if (zoom.value > 100) {
        zoom.value = 100;
      }
      if (zoom.value < 0) {
        zoom.value = 0;
      }
      this.store.dispatch(new ChangeZoom(zoom.value / 100));
    }
  }
}
