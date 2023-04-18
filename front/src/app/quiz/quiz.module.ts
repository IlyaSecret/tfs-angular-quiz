import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import {QuizCardModule} from "./quiz-card/quiz-card.module";
import {QuizAddModule} from "./quiz-add/quiz-add.module";
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
  declarations: [
    QuizComponent
  ],
  exports: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    QuizCardModule,
    QuizAddModule,
    TuiButtonModule
  ]
})
export class QuizModule { }
