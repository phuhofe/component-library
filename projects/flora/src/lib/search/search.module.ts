import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SearchBoxComponent } from './search.component';
import { CardModule } from '../card/card.module';

const MaterialModule = [
  MatIconModule,
  MatChipsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, ...MaterialModule, CardModule],
  exports: [SearchBoxComponent],
})
export class SearchModule {}
