import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colas3Component } from './colas3.component';

describe('Colas3Component', () => {
  let component: Colas3Component;
  let fixture: ComponentFixture<Colas3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colas3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
