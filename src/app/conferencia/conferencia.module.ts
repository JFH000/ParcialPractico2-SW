import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciaListComponent, ConferenciaDetailComponent],
  declarations: [ConferenciaListComponent, ConferenciaDetailComponent]
})
export class ConferenciaModule { }
