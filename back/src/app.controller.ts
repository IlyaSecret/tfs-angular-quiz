import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {InMemoryDBService} from "@nestjs-addons/in-memory-db";
import {QuizEntity} from "./quiz.entity";
import {Observable} from "rxjs";

@Controller()
export class AppController {
  constructor(private appService: InMemoryDBService<any>) {}

  @Get()
  getAll(): QuizEntity[] {
    return this.appService.getAll();
  }
  @Get(':id')
  GetProductById(@Param('id') id: string) {
    return this.appService.query(data => data.id === id)
  }
  @Post()
  addQuizCard(@Body() quiz: Partial<QuizEntity>): QuizEntity {
    return this.appService.create(quiz);
  }
  @Delete(':id')
  deleteQuizCard(@Param('id') id: string): void {
    return this.appService.delete(id);
  }
}
