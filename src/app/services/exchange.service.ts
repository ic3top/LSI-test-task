import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExchangeTableRes, Rate } from '../models/exhange.models';
import { getYesterday, transformDate } from '../utils/utils';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private _exchangeRates$ = new BehaviorSubject<ExchangeTableRes[]>([]);
  readonly exchangeRates$: Observable<Rate[]> = this._exchangeRates$.pipe(
    filter(res => !!res.length),
    map(res => res[0].rates)
  );

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  loadTableExchange(date: Date = getYesterday()) {
    const formatedDate = transformDate(date);
    this.http
      .get<ExchangeTableRes[]>(
        `https://api.nbp.pl/api/exchangerates/tables/A/${formatedDate}/?format=json`
      )
      .pipe(take(1))
      .subscribe(
        res => this._exchangeRates$.next(res),
        err => {
          if (err.status === 404) {
            this.showError(formatedDate);
          }
        }
      );
  }

  showError(date: string) {
    this.messageService.add({
      severity: 'error',
      summary: `Data for ${date} was not found.`,
    });
  }
}
