import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  exports: [
    CommonModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    RippleModule,
    SelectButtonModule,
    CardModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class NgPrimeModule {}
