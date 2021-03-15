import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CurrencyComponent } from './currency/currency.component';
import { ConvertComponent } from './currency/convert/convert.component';
import { MonitorComponent } from './currency/monitor/monitor.component';

@NgModule({
  declarations: [DashboardComponent, CurrencyComponent, ConvertComponent, MonitorComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
