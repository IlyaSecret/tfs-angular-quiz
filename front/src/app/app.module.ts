import { TuiRootModule, TuiDialogModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuizModule} from "./quiz/quiz.module";
import {QuizApiServiceToken} from "../services/IQuizService";
import {QuizApiService} from "../services/quiz-api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    HttpClientModule
],
  providers: [
    {provide: QuizApiServiceToken, useClass: QuizApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
