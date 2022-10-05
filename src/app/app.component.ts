import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-forms';
  currentFormType = 'reactive';
  formTypes = ['reactive', 'template', 'dynamic'];

  setFormType(formType: string): void {
    if (this.formTypes.includes(formType)) {
      this.currentFormType = formType;
    }
  }
}
