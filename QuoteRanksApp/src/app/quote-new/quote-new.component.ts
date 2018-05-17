import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { QuoteService } from '../quote.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  author={};
  newQuote: any;
  errors = {};

  constructor(private route: Router, private _route: ActivatedRoute, private authorservice: AuthorService, private quoteservice: QuoteService) { }

  ngOnInit() {
    this.AuthorShowOne();
    this.newQuote = {quote: "", votes: 0};
  }

  AuthorShowOne(){
    this._route.paramMap.subscribe( params => {
      let observable = this.authorservice.getAuthor(params.get('id'));
      observable.subscribe(data => {
        this.author = data;     
      })
    })
  }

  onCreate(id){
    this.errors = [];
    let observable = this.quoteservice.newQuote(this.newQuote, id);
    observable.subscribe(
      (data) => {
        if(data == null){
          this.route.navigateByUrl('/QuoteList/'+id);          
        }
        else if(data["errors"]){                
          this.errors = data["errors"];
        }
        else{
        this.route.navigateByUrl('/QuoteList/'+id);
        }
    })
  }

}
