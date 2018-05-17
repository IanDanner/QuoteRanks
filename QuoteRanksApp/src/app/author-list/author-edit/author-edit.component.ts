import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author={};
  editAuthor={};
  errors = {};  

  constructor(private route: Router, private _route: ActivatedRoute, private authorservice: AuthorService) { }

  ngOnInit() {
    this.ShowOne();
  }

  ShowOne(){
    this._route.paramMap.subscribe( params => {
      let observable = this.authorservice.getAuthor(params.get('id'));
      observable.subscribe(data => {
        this.author = data;     
      })
    })
  }


  onEdit(editAuthor){
    this.author = {};
    let observable = this.authorservice.editAuthor(editAuthor);
    observable.subscribe(data => {
      if(data["errors"]){        
        this.errors = data["errors"];
      }
      else{
        this.route.navigateByUrl('/');
      }
    })      
  }

}
