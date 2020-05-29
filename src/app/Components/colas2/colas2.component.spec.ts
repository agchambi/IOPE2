import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colas2Component } from './colas2.component';

describe('Colas2Component', () => {
  let component: Colas2Component;
  let fixture: ComponentFixture<Colas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
