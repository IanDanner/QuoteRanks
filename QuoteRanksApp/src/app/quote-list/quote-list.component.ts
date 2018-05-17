import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { QuoteService } from '../quote.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {


  author={};

  constructor(private route: Router, private _route: ActivatedRoute, private authorservice: AuthorService, private quoteservice: QuoteService) { }

  ngOnInit() {
    this.AuthorShowOne();
  }

  AuthorShowOne(){
    this._route.paramMap.subscribe( params => {
      let observable = this.authorservice.getAuthor(params.get('id'));
      observable.subscribe(data => {
        this.author = data;     
      })
    })
  }

  onDelete(id){
    let observable = this.quoteservice.deleteQuote(this.author['_id'] , id);
    observable.subscribe(data => {
      this.AuthorShowOne();
    })
  }

  voteUp(Qid){
    for(let quote of this.author['quotes']){
      if(quote['_id'] == Qid){
        quote['votes'] += 1;
        
        let observable = this.quoteservice.editQuote(this.author['_id'], quote);
        observable.subscribe(data => {
          if(data["errors"]){             
          }
        })
      }
    }
  }


  voteDown(Qid){
    for(let quote of this.author['quotes']){
      if(quote['_id'] == Qid){
        quote['votes'] -= 1;
        let observable = this.quoteservice.editQuote(this.author['_id'], quote);
        observable.subscribe(data => {
          if(data["errors"]){        
          }
        }) 
      }
    }
  }
}
