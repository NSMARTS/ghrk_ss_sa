import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHolidayAddComponent } from './country-holiday-add.component';

describe('CountryHolidayAddComponent', () => {
  let component: CountryHolidayAddComponent;
  let fixture: ComponentFixture<CountryHolidayAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryHolidayAddComponent]
    });
    fixture = TestBed.createComponent(CountryHolidayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
