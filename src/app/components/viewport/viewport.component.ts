import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Application } from 'pixi.js';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss',
})
export class ViewportComponent implements OnInit {
  @ViewChild('viewport') viewport!: ElementRef;

  async ngOnInit() {
    const app = new Application();
    await app.init();

    // Resize canvas content when viewport is resized.
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      app.resizeTo = entries[0].target as HTMLElement;
    });

    observer.observe(this.viewport.nativeElement);

    this.viewport.nativeElement.appendChild(app.canvas);
  }
}
