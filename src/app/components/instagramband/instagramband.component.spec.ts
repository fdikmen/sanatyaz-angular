import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagrambandComponent } from './instagramband.component';

describe('InstagrambandComponent', () => {
  let component: InstagrambandComponent;
  let fixture: ComponentFixture<InstagrambandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagrambandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagrambandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
