import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService],
})
export class AppComponent {
  title = 'angular-forms';
  currentFormTypeIndex = 0;
  formTypes = ['reactive', 'template', 'dynamic'];
  questions$: Observable<QuestionBase<string>[]>;

  constructor(private questionService: QuestionService) {
    this.questions$ = this.questionService.getQuestions();
  }

  setFormTypeIndex(index: number): void {
    this.currentFormTypeIndex = index;
  }

  updateCurrentFormTypeName(name: string) {
    if (name.trim()) this.formTypes[this.currentFormTypeIndex] = name;
  }
}
