import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';
import { AuthorEditComponent } from './author-list/author-edit/author-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AuthorService } from './author.service';
import { QuoteService } from './quote.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorNewComponent,
    QuoteListComponent,
    QuoteNewComponent,
    AuthorEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AuthorService, QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
