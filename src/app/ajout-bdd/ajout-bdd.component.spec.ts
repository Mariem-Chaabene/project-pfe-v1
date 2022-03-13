import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBddComponent } from './ajout-bdd.component';

describe('AjoutBddComponent', () => {
  let component: AjoutBddComponent;
  let fixture: ComponentFixture<AjoutBddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
