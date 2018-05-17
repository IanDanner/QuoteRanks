import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private _http: HttpClient) {}

  newQuote(newQuote, id){
    return this._http.post('/Authors/'+id+'/newQuote' , newQuote);
  }
  editQuote(id, editQuote){
    return this._http.put('/Authors/'+id+'/Edit/'+ editQuote._id, editQuote);
  }
  deleteQuote(Aid, Qid){
    return this._http.delete('/Authors/'+Aid+'/Delete/'+Qid);
  }

}
