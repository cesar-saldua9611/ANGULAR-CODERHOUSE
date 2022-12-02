import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConcatStringPipe } from '../core/pipes/concat-string.pipe';
import { HeaderFontSizeDirective } from '../core/directives/header-font-size.directive';


@NgModule({
  declarations: [
    ConcatStringPipe,
    HeaderFontSizeDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConcatStringPipe,
    HeaderFontSizeDirective
  ]
})
export class SharedModule { }