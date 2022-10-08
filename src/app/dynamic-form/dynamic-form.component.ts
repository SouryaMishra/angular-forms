import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  constructor(private questionControlService: QuestionControlService) {}

  ngOnInit(): void {
    this.form = this.questionControlService.toFormGroup(
      this.questions as QuestionBase<string>[]
    );
  }

  @Input() questions: QuestionBase<string>[] | null = [];

  @Input() form!: FormGroup;

  payload = '';

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }
}
