import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, LogoModule],
  exports: [FooterComponent],
})
export class FooterModule {}
