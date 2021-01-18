import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
readonly APIUrl = "http://127.0.0.1:8000";



  constructor(private http:HttpClient) { }

  getAnswersList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/show-answers');
  }
  addAnswer(val:any){
    return this.http.post(this.APIUrl + '/add-answer/',val);
  }
  getAllAnswers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/show-answers')
  }
  

}
