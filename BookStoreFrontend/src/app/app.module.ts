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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ImageCComponent,
    BookIconsComponent,
    BookGridComponent
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
    NgbModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
