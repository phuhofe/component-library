import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { CardModule } from '../card/card.module';
import { FloraModule } from '../flora.module';
import { OrderType } from '../interfaces/order';
import { PassingCardComponent } from './passing-card.component';
import { OrderData } from '../mock/mock-order-passing-card';

describe('Passing Card Component', () => {
  let component: PassingCardComponent;
  let fixture: ComponentFixture<PassingCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassingCardComponent],
      imports: [CommonModule, MatIconModule, HttpClientTestingModule, CardModule, FloraModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PassingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should show the A11Y label full date',
    waitForAsync(() => {
      const expectedOrder: OrderType = OrderData;
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.deathcity}, from: ${expectedOrder.person.birthdate} to: ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label full name',
    waitForAsync(() => {
      const expectedOrder: OrderType = OrderData;
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.deathcity}, from: ${expectedOrder.person.birthdate} to: ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing birthdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          birthdate: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.deathcity}, ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing deathdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          deathdate: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.deathcity}, ${expectedOrder.person.birthdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing deathcity',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          deathcity: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, from: ${expectedOrder.person.birthdate} to: ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing birthdate and deathdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          birthdate: undefined,
          deathdate: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.deathcity}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing birthdate and deathcity',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          birthdate: undefined,
          deathcity: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing deathcity and deathdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          deathdate: undefined,
          deathcity: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}, ${expectedOrder.person.birthdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing birthdate, deathdate, deathcity',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        person: {
          ...OrderData.person,
          birthdate: undefined,
          deathdate: undefined,
          deathcity: undefined,
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder.person);
      const expectedTranslatedLabel = `${expectedOrder.person.firstName} ${expectedOrder.person.lastName}`;
      expect(translatedLabel).toContain(expectedTranslatedLabel);
    })
  );
});
