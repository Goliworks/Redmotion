import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcasterComponent } from './broadcaster.component';

describe('BroadcasterComponent', () => {
  let component: BroadcasterComponent;
  let fixture: ComponentFixture<BroadcasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BroadcasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
