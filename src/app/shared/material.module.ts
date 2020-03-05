import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


const modules: any[] = [
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class MaterialModule {
}
