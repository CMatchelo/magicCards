import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSearchComponent } from './set-search.component';
import { NgModel } from '@angular/forms';

describe('SetSearchComponent', () => {
  let component: SetSearchComponent;
  let fixture: ComponentFixture<SetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetSearchComponent, NgModel]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
