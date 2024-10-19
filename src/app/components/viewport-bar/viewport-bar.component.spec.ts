import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportBarComponent } from './viewport-bar.component';

describe('ViewportBarComponent', () => {
  let component: ViewportBarComponent;
  let fixture: ComponentFixture<ViewportBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewportBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
