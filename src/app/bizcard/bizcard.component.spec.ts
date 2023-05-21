import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizcardComponent } from './bizcard.component';

describe('BizcardComponent', () => {
  let component: BizcardComponent;
  let fixture: ComponentFixture<BizcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BizcardComponent]
    });
    fixture = TestBed.createComponent(BizcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
