import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfProComponent } from './conf-pro.component';

describe('ConfProComponent', () => {
  let component: ConfProComponent;
  let fixture: ComponentFixture<ConfProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
