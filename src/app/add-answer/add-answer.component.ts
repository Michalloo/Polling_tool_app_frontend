import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ExchangeService} from 'src/app/exchange.service'
@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})


export class AddAnswerComponent implements OnInit {
  constructor(private service:ExchangeService) { }


  selectedAnswer: string= 'Indeed it is';
  answers: any = [
    'Indeed it is',
    'Yes',
    'Could be better'
  ];

  radioChangeHandler (event:any){
    this.selectedAnswer = event.target.value;
  }

addAnswerToDatabase(){
  var val = {"answer":this.selectedAnswer}

  this.service.addAnswer(val).subscribe(res=>{
   alert(res.toString())
 })

}






  ngOnInit(): void {
  }

}
