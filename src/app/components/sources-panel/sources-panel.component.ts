import { Component } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sources-panel',
  standalone: true,
  imports: [PanelComponent, ButtonModule],
  templateUrl: './sources-panel.component.html',
  styleUrl: './sources-panel.component.scss',
})
export class SourcesPanelComponent {}
