import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizAddComponent} from "./quiz-add.component";
import {TuiInputModule, TuiTextAreaModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule} from "@taiga-ui/core";



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
    ReactiveFormsModule,
    TuiButtonModule
  ]
})
export class QuizAddModule { }
