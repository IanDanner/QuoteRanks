import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { QuoteService } from '../quote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors=[];
  author={};

  constructor(private _route: ActivatedRoute, private authorservice: AuthorService, private quoteservice: QuoteService) { }

  ngOnInit() {
    this.ShowAll();
  }

  ShowAll(){
    let observable = this.authorservice.getAuthors();
    observable.subscribe(data => {;
      this.authors = Object.values(data);
    });
  }

  onDelete(Aid){
    console.log(Aid);
    this.authorservice.getAuthor(Aid).subscribe(data => {
      this.author = data;

      for(let quote of this.author['quotes']){
        this.quoteservice.deleteQuote(Aid , quote['_id']).subscribe(data => {})
      }

      this.authorservice.deleteAuthor(Aid).subscribe(data => {
        this.ShowAll();
      })
    })
  }
}