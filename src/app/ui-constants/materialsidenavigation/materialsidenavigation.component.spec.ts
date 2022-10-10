import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsidenavigationComponent } from './materialsidenavigation.component';

describe('MaterialsidenavigationComponent', () => {
  let component: MaterialsidenavigationComponent;
  let fixture: ComponentFixture<MaterialsidenavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsidenavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsidenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
