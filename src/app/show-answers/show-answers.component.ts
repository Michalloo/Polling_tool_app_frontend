import { Component, OnInit } from '@angular/core';
import {ExchangeService} from 'src/app/exchange.service'


@Component({
  selector: 'app-show-answers',
  templateUrl: './show-answers.component.html',
  styleUrls: ['./show-answers.component.css']
})
export class ShowAnswersComponent implements OnInit {

  constructor(private service:ExchangeService) { }
  AnswersList:any=[];

  ngOnInit(): void {
    this.refreshAnswersList();
  }
  refreshAnswersList(){
    this.service.getAnswersList().subscribe(data=>{
      this.AnswersList=data;
    })
  }

}
