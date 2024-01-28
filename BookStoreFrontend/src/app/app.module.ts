import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import  {InputTextModule} from 'primeng/inputtext'
import {ReactiveFormsModule} from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import {HttpClientModule} from '@angular/common/http'
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCComponent } from './components/image-c/image-c.component';
import { BookIconsComponent } from './components/book-icons/book-icons.component';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { DialogModule } from 'primeng/dialog';
import { VeiwAllComponent } from './components/veiw-all/veiw-all.component';
import { DataViewModule } from 'primeng/dataview';
import { FiltersComponent } from './components/filters/filters.component';
import {RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { BuyNowPageComponent } from './components/buy-now-page/buy-now-page.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PurcahseNowComponent } from './components/purcahse-now/purcahse-now.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ImageCComponent,
    BookIconsComponent,
    BookGridComponent,
    VeiwAllComponent,
    FiltersComponent,
    BuyNowPageComponent,
    CartComponent,
    OrdersComponent,
    ProfileComponent,
    PurcahseNowComponent,
    NewArrivalComponent,
    BestSellerComponent,
    TopRatedComponent,
    FooterComponent,
    AuthorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    NgbModule,
    DialogModule,
    DataViewModule,
    RatingModule,
CheckboxModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
