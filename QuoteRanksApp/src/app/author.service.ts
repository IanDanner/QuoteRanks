import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) {}

  getAuthors(){
    return this._http.get('/Authors');
  }
  getAuthor(id){
    return this._http.get('/Authors/'+id);
  }
  newAuthor(newAuthor){
    return this._http.post('/Authors', newAuthor);
  }
  editAuthor(editAuthor){
    return this._http.put('/Authors/'+ editAuthor._id, editAuthor);
  }
  deleteAuthor(id){
    return this._http.delete('/Authors/'+id);
  }

}
