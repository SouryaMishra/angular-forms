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
  currentFormType = 'reactive';
  formTypes = ['reactive', 'template', 'dynamic'];
  questions$: Observable<QuestionBase<string>[]>;

  constructor(private questionService: QuestionService) {
    this.questions$ = this.questionService.getQuestions();
  }

  setFormType(formType: string): void {
    if (this.formTypes.includes(formType)) {
      this.currentFormType = formType;
    }
  }
}
