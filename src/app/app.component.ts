import { Component } from '@angular/core';
import { _MatButtonToggleGroupMixinBase } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  showSpinner = false;
  answerDisplayed: string;

  showUser() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
      this.answerDisplayed = this.userName;
      this.userName = '';
    }, 2500);
  }
}
