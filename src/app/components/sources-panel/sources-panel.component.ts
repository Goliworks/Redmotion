import { Component, inject } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngxs/store';
import { AddElement } from '../../store/environment/environment.actions';
import { Assets, Sprite } from 'pixi.js';

@Component({
  selector: 'app-sources-panel',
  standalone: true,
  imports: [PanelComponent, ButtonModule],
  templateUrl: './sources-panel.component.html',
  styleUrl: './sources-panel.component.scss',
})
export class SourcesPanelComponent {
  private store = inject(Store);

  protected async add() {
    // Test
    const texture = await Assets.load(
      'https://pixijs.com/assets/flowerTop.png',
    );
    const sprite = new Sprite(texture);

    this.store.dispatch(new AddElement(sprite));
  }
}
