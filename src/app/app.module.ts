import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';
import { ExchangeService } from './exchange.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowAnswersComponent } from './show-answers/show-answers.component';
import { AnswerSubmittedComponent } from './answer-submitted/answer-submitted.component'



@NgModule({
  declarations: [
    AppComponent,
    AddAnswerComponent,
    ShowAnswersComponent,
    AnswerSubmittedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
