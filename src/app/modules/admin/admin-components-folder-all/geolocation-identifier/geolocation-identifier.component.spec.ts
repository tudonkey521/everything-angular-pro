import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationIdentifierComponent } from './geolocation-identifier.component';

describe('GeolocationIdentifierComponent', () => {
  let component: GeolocationIdentifierComponent;
  let fixture: ComponentFixture<GeolocationIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocationIdentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocationIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
