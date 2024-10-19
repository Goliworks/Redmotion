import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Application, Container, Graphics } from 'pixi.js';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss',
})
export class ViewportComponent implements OnInit {
  @ViewChild('viewport') viewport!: ElementRef;

  private projectWidth = 1920;
  private projectHeight = 1080;

  async ngOnInit() {
    const app = new Application();
    await app.init({ background: '#222426' });

    // Resize canvas content when viewport is resized.
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      app.resizeTo = entries[0].target as HTMLElement;
    });

    observer.observe(this.viewport.nativeElement);

    this.viewport.nativeElement.appendChild(app.canvas);

    const workingArea = new Container();
    app.stage.addChild(workingArea);

    app.ticker.add(() => {
      workingArea.x = app.renderer.width / 2 - this.projectWidth / 2;
      workingArea.y = app.renderer.height / 2 - this.projectHeight / 2;
    });

    const visibleZone = new Graphics();
    visibleZone.rect(0, 0, this.projectWidth, this.projectHeight);
    visibleZone.fill(0x3b3f42);

    workingArea.addChild(visibleZone);
  }
}
