import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraComponent, FLORA_COMPONENT_OPTIONS } from './flora.component';

describe('FloraComponent', () => {
  let component: FloraComponent;
  let fixture: ComponentFixture<FloraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloraComponent],
      providers: [
        {
          provide: FLORA_COMPONENT_OPTIONS,
          useValue: FLORA_COMPONENT_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
