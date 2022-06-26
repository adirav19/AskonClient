import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NukonComponent } from './nukon.component';

describe('NukonComponent', () => {
  let component: NukonComponent;
  let fixture: ComponentFixture<NukonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NukonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NukonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
