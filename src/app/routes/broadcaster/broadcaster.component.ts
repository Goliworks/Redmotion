import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ViewportComponent } from '../../components/viewport/viewport.component';
import { ViewEditorComponent } from '../../components/view-editor/view-editor.component';

@Component({
  selector: 'app-broadcaster',
  standalone: true,
  imports: [SplitterModule, ViewEditorComponent],
  templateUrl: './broadcaster.component.html',
  styleUrl: './broadcaster.component.scss',
})
export class BroadcasterComponent {}
