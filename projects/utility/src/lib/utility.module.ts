import { NgModule } from '@angular/core';
import 'reflect-metadata';
import { AbsPipe } from './pipes/abs.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SignedPipe } from './pipes/signed.pipe';

@NgModule({
  declarations: [AbsPipe, FilterPipe, SignedPipe],
  imports: [],
  exports: [AbsPipe, FilterPipe, SignedPipe]
})
export class UtilityModule { }
