import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-broadcaster',
  standalone: true,
  imports: [SplitterModule],
  templateUrl: './broadcaster.component.html',
  styleUrl: './broadcaster.component.scss',
})
export class BroadcasterComponent {}
