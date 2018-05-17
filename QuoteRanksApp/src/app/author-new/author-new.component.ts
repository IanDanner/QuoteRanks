import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {

  newAuthor: any;
  errors = {};

  constructor(private _route: Router, private authorservice: AuthorService) { }

  ngOnInit() {
    this.newAuthor = {name: ""};
  }

  onCreate(){
    this.errors = [];
    let observable = this.authorservice.newAuthor(this.newAuthor);
    observable.subscribe(
      (data) => {
        if(data["errors"]){           
          this.errors = data["errors"];
        }
        else{
        this._route.navigateByUrl('/');
        }
    })
  }
  
}
