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
import { NgxPaginationModule } from 'ngx-pagination';
import { ListaLivroComponent } from './components/lista-livro/lista-livro.component';
import { LivroTelaComponent } from './components/livro-tela/livro-tela.component';

const appRoutes: Routes = [
  {path: 'cadastro', component:BookComponent},
  {path: 'edit/:identify', component:BookEditComponent},
  {path: 'meuLivro/:identify', component:LivroTelaComponent},
  { path: '', redirectTo: '/livros', pathMatch: 'full' },
  {path: 'livros', component: ListaLivroComponent}]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavbarComponent,
    BookEditComponent,
    ListaLivroComponent,
    LivroTelaComponent
  ],
  imports: [
    NgxPaginationModule,
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
