import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Application, Container, Graphics } from 'pixi.js';
import { EnvironmentState } from '../../store/environment/environment.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss',
})
export class ViewportComponent implements OnInit {
  private store = inject(Store);

  protected zoom$: Observable<number> = this.store.select(
    EnvironmentState.getZoom,
  );

  protected zoom: number = 1;

  @ViewChild('viewport') viewport!: ElementRef;

  private projectWidth = 1920;
  private projectHeight = 1080;

  async ngOnInit() {
    const app = new Application();
    await app.init({ background: '#222426' });
    const workingArea = new Container();

    // Resize canvas content when viewport is resized.
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      app.resizeTo = entries[0].target as HTMLElement;
      this.workingAreaPosition(workingArea, app, this.zoom);
    });

    observer.observe(this.viewport.nativeElement);

    this.viewport.nativeElement.appendChild(app.canvas);

    app.stage.addChild(workingArea);

    const visibleZone = new Graphics();
    visibleZone.rect(0, 0, this.projectWidth, this.projectHeight);
    visibleZone.fill(0x000000);

    workingArea.addChild(visibleZone);

    this.zoom$.subscribe((zoom) => {
      workingArea.scale.set(zoom);
      this.zoom = zoom;
      this.workingAreaPosition(workingArea, app, zoom);
    });
  }

  workingAreaPosition(workingArea: Container, app: Application, zoom: number) {
    workingArea.x = app.renderer.width / 2 - (this.projectWidth * zoom) / 2;
    workingArea.y = app.renderer.height / 2 - (this.projectHeight * zoom) / 2;
  }
}
