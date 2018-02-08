import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CoreService } from './shared/core.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterComponent],
  providers: [CoreService]
})
export class CoreModule { }
