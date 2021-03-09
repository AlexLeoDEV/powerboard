import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [DashboardComponent, CurrencyComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
