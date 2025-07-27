import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-product-page></app-product-page>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-marketplace';
}