import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlesComponent } from './handles.component';

describe('HandlesComponent', () => {
  let component: HandlesComponent;
  let fixture: ComponentFixture<HandlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
