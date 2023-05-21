import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelLimousineComponent } from './michael-limousine.component';

describe('MichaelLimousineComponent', () => {
  let component: MichaelLimousineComponent;
  let fixture: ComponentFixture<MichaelLimousineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MichaelLimousineComponent]
    });
    fixture = TestBed.createComponent(MichaelLimousineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
