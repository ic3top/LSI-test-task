import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';
import { Table } from 'primeng/table';
import { getYesterday } from '../../utils/utils';

@Component({
  selector: 'app-exchange-table',
  templateUrl: './exchange-table.component.html',
  styleUrls: ['./exchange-table.component.scss'],
})
export class ExchangeTableComponent implements OnInit {
  exchangeRates$ = this.exchangeService.exchangeRates$;
  maxDateFilter = getYesterday();
  dateFilter: string | null = null;
  rows = 10;

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {
    this.exchangeService.loadTableExchange();
  }

  onDateFilterChange(date: any) {
    this.dateFilter = date;
    if (date) this.exchangeService.loadTableExchange(date);
  }

  clear(table: Table) {
    table.clear();
    if (this.dateFilter) {
      this.dateFilter = null;
      this.exchangeService.loadTableExchange();
    }
  }
}
