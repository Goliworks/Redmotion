import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditorComponent } from './view-editor.component';

describe('ViewEditorComponent', () => {
  let component: ViewEditorComponent;
  let fixture: ComponentFixture<ViewEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
