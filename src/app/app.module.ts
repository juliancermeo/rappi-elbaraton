import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSliderModule,
  MatGridListModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderByComponent } from './order-by/order-by.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FilterPipe } from './filter.pipe';
import { SortbyPipe } from './sortby.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    SidebarComponent,
    OrderByComponent,
    ShoppingCartComponent,
    FilterPipe,
    SortbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule, 
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule, 
    MatSliderModule,
    MatGridListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule, 
    Ng2OrderModule,
    Ng2FilterPipeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
