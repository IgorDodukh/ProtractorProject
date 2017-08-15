import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  incrementedValue = 1;

  IncrementValue(){
    this.incrementedValue += 1;
  }

  DecrementValue(){
    this.incrementedValue -= 1;
  }
}

