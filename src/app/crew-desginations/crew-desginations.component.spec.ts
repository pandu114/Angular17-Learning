import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDesginationsComponent } from './crew-desginations.component';

describe('CrewDesginationsComponent', () => {
  let component: CrewDesginationsComponent;
  let fixture: ComponentFixture<CrewDesginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewDesginationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewDesginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
