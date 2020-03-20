import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditProcessComponent } from './new-edit-process.component';

describe('NewEditProcessComponent', () => {
  let component: NewEditProcessComponent;
  let fixture: ComponentFixture<NewEditProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
