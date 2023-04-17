import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizAddComponent} from "./quiz-add.component";
import {TuiInputModule, TuiTextAreaModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    QuizAddComponent
  ],
  exports: [
    QuizAddComponent
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiTextAreaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuizAddModule { }
