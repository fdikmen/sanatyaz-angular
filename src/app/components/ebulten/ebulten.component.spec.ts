import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbultenComponent } from './ebulten.component';

describe('EbultenComponent', () => {
  let component: EbultenComponent;
  let fixture: ComponentFixture<EbultenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbultenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbultenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
