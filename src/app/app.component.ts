import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  rows = [
    {
      sign: 1,
      value: 2,
      disabled: 1
    },
    {
      sign: -1,
      value: 1,
      disabled: 1
    }
  ];

  aggiungi = function() {
    this.rows.push({
      sign: 1,
      value: 0,
      disabled: 1
    });
  };

  rimuovi = function(item) {
    var index = this.rows.indexOf(item);
    this.rows.splice(index, 1);
  };

  toggle = function(item){
      if (item.disabled == 0) {
      item.disabled = 1;
      }else{
      item.disabled = 0;
    }
  }

  result = 1000;
  reducer = (accumulator, currentValue) =>
    accumulator +
    currentValue.value * currentValue.sign * currentValue.disabled;

  ngAfterContentChecked() {
    this.result = this.rows.reduce(this.reducer, 0);
  }
}
