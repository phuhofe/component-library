import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PaginatorComponent } from './paginator.component';
import { CardModule } from '../card/card.module';
import { MatSelectModule } from '@angular/material/select';

// const MaterialModules = [MatButtonModule, MatIconModule, MatSelectModule, MatOptionModule, MatFormFieldModule];
const AngularModules = [CommonModule, HttpClientModule];
const MaterialModules = [MatButtonModule, MatIconModule, MatSelectModule];
const FloraModules = [CardModule];

@NgModule({
  declarations: [PaginatorComponent],
  imports: [...AngularModules, ...MaterialModules, ...FloraModules],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
