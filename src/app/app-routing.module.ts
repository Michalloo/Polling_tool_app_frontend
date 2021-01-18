import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddAnswerComponent} from './add-answer/add-answer.component'
import {AnswerSubmittedComponent} from './answer-submitted/answer-submitted.component'
import {ShowAnswersComponent} from './show-answers/show-answers.component'
const routes: Routes = [
{path:'add-answer', component:AddAnswerComponent},
{path:'show-answers', component:ShowAnswersComponent},
{path:'answer-submitted', component:AnswerSubmittedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
