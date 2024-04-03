import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekosokComponent } from './jatekosok.component';

describe('JatekosokComponent', () => {
  let component: JatekosokComponent;
  let fixture: ComponentFixture<JatekosokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JatekosokComponent]
    });
    fixture = TestBed.createComponent(JatekosokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
