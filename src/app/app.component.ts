import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular class 22';

  get titleVal(): string {
    return this.title;
  }
  getTitleVal(): string {
    return this.title;
  }
}
