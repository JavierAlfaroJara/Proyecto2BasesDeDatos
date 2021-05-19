import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatSlideToggleModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListTopComponent } from './components/list-top/list-top.component';
import { ListStockComponent } from './components/list-stock/list-stock.component';
import { ListNodesComponent } from './components/list-nodes/list-nodes.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatPaginatorModule
  ],
  entryComponents:[
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
