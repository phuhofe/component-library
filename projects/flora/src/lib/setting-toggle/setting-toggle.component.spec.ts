import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { SettingToggleComponent } from './setting-toggle.component';

describe('SwitchComponent', () => {
  let component: SettingToggleComponent;
  let fixture: ComponentFixture<SettingToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingToggleComponent],
      imports: [MatIconModule, MatCheckboxModule, MatCardModule, MatListModule, MatRadioModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
