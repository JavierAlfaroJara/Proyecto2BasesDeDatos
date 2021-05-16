import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatCardModule  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListTopComponent } from './components/list-top/list-top.component';
import { ListStockComponent } from './components/list-stock/list-stock.component';
import { ListNodesComponent } from './components/list-nodes/list-nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTopComponent,
    ListStockComponent,
    ListNodesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    MatTabsModule
  ],
  entryComponents:[
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
