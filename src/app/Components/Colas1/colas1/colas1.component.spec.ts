import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colas1Component } from './colas1.component';

describe('Colas1Component', () => {
  let component: Colas1Component;
  let fixture: ComponentFixture<Colas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
