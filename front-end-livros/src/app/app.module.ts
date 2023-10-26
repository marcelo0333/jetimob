import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookComponent } from './components/book/book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookEditComponent } from './components/book-edit/book-edit.component'

const appRoutes: Routes = [
  {path: '', component:BookComponent},
  {path: 'edit/:identify', component:BookEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavbarComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
