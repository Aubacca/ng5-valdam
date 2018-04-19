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

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
