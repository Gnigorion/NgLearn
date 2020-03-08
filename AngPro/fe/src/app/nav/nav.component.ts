import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <p>Welcome {{name}}!!!</p>
    <h2>{{2+2}}</h2>
    <h2 [ngClass]="multiClassPropertyBindin">{{greetUser('Rajesh')}}</h2>
    <input type="text" value="Vipin"/>
    <input [id]="myID" type="text" value="Vipin"/>
  `,
  styles: [`
  .text-success{
    color:green
  }
  .text-fail{
    color:red
  }
  .text-special{
    font-style:italic
  }
  `]
})
export class NavComponent implements OnInit {
  public name = 'Vipin'
  public myID = "testID"
  public isSpecial = true
  public isDanger = false
  public multiClassPropertyBindin ={
    "text-success": !this.isDanger,
    "text-fail":this.isDanger,
    "text-special":this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(name){
    return "Hello " + name +"!!!" }
}
