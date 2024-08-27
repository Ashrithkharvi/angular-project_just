import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestopComponent } from './destop.component';

describe('DestopComponent', () => {
  let component: DestopComponent;
  let fixture: ComponentFixture<DestopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestopComponent]
    });
    fixture = TestBed.createComponent(DestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
