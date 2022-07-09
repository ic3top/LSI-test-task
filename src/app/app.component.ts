import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  data: any[] = [
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
    { name: 'Steave', age: '23' },
  ];
  cols: any[] = [
    { header: 'Name', field: 'name' },
    { header: 'Age', field: 'age' },
  ];
}
