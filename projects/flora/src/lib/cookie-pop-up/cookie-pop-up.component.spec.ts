import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../card/card.module';
import { SettingToggleModule } from '../setting-toggle/setting-toggle.module';

import { CookiePopUpComponent } from './cookie-pop-up.component';

describe('CookiePopUpComponent', () => {
  let component: CookiePopUpComponent;
  let fixture: ComponentFixture<CookiePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiePopUpComponent],
      imports: [
        CardModule,
        MatButtonModule,
        SettingToggleModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
