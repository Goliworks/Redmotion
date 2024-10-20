import { Component } from '@angular/core';
import { ViewportComponent } from '../viewport/viewport.component';
import { ViewportBarComponent } from '../viewport-bar/viewport-bar.component';

@Component({
  selector: 'app-view-editor',
  standalone: true,
  imports: [ViewportComponent, ViewportBarComponent],
  templateUrl: './view-editor.component.html',
  styleUrl: './view-editor.component.scss',
})
export class ViewEditorComponent {}
