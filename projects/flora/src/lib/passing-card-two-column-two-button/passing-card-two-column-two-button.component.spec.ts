import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { CardModule } from '../card/card.module';
import { FloraModule } from '../flora.module';
import { PassingCardTwoColumnTwoButtonComponent } from './passing-card-two-column-two-button.component';
import { OrderData } from '../mock/mock-order-passing-card-two-column-two-button';
import { OrderType } from '../interfaces/order';

describe('Passing Card Two Column Two Button Component', () => {
  let component: PassingCardTwoColumnTwoButtonComponent;
  let fixture: ComponentFixture<PassingCardTwoColumnTwoButtonComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassingCardTwoColumnTwoButtonComponent],
      imports: [CommonModule, MatIconModule, HttpClientTestingModule, CardModule, FloraModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PassingCardTwoColumnTwoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(
    'should show the A11Y label full data',
    waitForAsync(() => {
      const expectedOrder: OrderType = OrderData;
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel =
        component.getFullName(expectedOrder.person) +
        component.getCeremony(expectedOrder.ceremony) +
        `, from: ${expectedOrder.person.birthdate} to: ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label full name',
    waitForAsync(() => {
      const expectedOrder: OrderType = OrderData;
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel =
        component.getFullName(expectedOrder.person) +
        component.getCeremony(expectedOrder.ceremony) +
        `, from: ${expectedOrder.person.birthdate} to: ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing ceremony',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        ceremony: undefined,
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel =
        component.getFullName(expectedOrder.person) + `, from: ${expectedOrder.person.birthdate} to: ${expectedOrder.person.deathdate}`;
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
          birthdate: '',
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel =
        component.getFullName(expectedOrder.person) +
        component.getCeremony(expectedOrder.ceremony) +
        `, ${expectedOrder.person.deathdate}`;
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
          deathdate: '',
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel =
        component.getFullName(expectedOrder.person) +
        component.getCeremony(expectedOrder.ceremony) +
        `, ${expectedOrder.person.birthdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing ceremony and birthdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        ceremony: undefined,
        person: {
          ...OrderData.person,
          birthdate: '',
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel = component.getFullName(expectedOrder.person) + `, ${expectedOrder.person.deathdate}`;
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing ceremony and deathdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        ceremony: undefined,
        person: {
          ...OrderData.person,
          deathdate: '',
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel = component.getFullName(expectedOrder.person) + `, ${expectedOrder.person.birthdate}`;
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
          deathdate: '',
          birthdate: '',
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel = component.getFullName(expectedOrder.person) + component.getCeremony(expectedOrder.ceremony);
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );

  it(
    'should show the A11Y label missing ceremony, birthdate, deathdate',
    waitForAsync(() => {
      const expectedOrder: OrderType = {
        ...OrderData,
        ceremony: undefined,
        person: {
          ...OrderData.person,
          deathdate: '',
          birthdate: '',
        },
      };
      const translatedLabel = component.getA11YLabel(expectedOrder);
      const expectedTranslatedLabel = component.getFullName(expectedOrder.person);
      expect(translatedLabel).toEqual(expectedTranslatedLabel);
    })
  );
});
