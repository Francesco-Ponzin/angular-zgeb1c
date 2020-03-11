import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  rows = [
    {
      sign: 1,
      value: 0,
      disabled: true
    }
  ]

  reducer = (accumulator, currentValue) => accumulator + currentValue.value;

  result = this.rows.reduce(this.reducer, 0);



}
