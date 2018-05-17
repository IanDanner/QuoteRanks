import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';
import { AuthorEditComponent } from './author-list/author-edit/author-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: AuthorListComponent },  
  { path: 'AuthorList', component: AuthorListComponent, children: []},
  { path: 'Edit/:id', component: AuthorEditComponent},  
  { path: 'AuthorNew', component: AuthorNewComponent, children: []},
  { path: 'QuoteList/:id', component: QuoteListComponent, children: []},
  { path: 'QuoteList/:id/QuoteNew', component: QuoteNewComponent, children: []},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
