import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { ICard } from 'src/shared/models/card';

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.scss']
})
export class QuizAddComponent{
  @Output() addCard = new EventEmitter<ICard>();

  constructor() {
  }

  readonly form: FormGroup = new FormGroup({
    term: new FormControl(null),
    description: new FormControl(null)
  })

  submit(): void {
      this.addCard.emit({
        term: this.form.get('term')?.value,
        description: this.form.get('description')?.value,
        id: ''
      });
      this.form.reset();
    }
}
