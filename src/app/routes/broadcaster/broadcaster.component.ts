import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { ViewportComponent } from '../../components/viewport/viewport.component';

@Component({
  selector: 'app-broadcaster',
  standalone: true,
  imports: [SplitterModule, ViewportComponent],
  templateUrl: './broadcaster.component.html',
  styleUrl: './broadcaster.component.scss',
})
export class BroadcasterComponent {}
