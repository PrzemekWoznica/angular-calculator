import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNumber: string = "";
  expressionType: string = "";
  expressionSign: string[] = ["+", "-", "x", "/", "%"];
  expressionChosen: string = "";
  secondNumber: string = "";
  expressionShowing: string = "";
  firstNumberIsSet: boolean = false;
  resultNumber: number = 0;

  remove():void{
    this.firstNumber = "";
    this.secondNumber = "";
    this.expressionType = "";
    this.expressionChosen = "";
    this.expressionShowing = "";
    this.firstNumberIsSet = false;
    this.resultNumber = 0;
  }

  enterNumber(num:string): void{
    if(this.firstNumberIsSet === false){
      this.firstNumber += "" + num;
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else {
      this.secondNumber += "" + num;
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    }
  }

  enterComma(){
    if(this.firstNumberIsSet === false){
      this.firstNumber += ".";
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else {
      this.secondNumber += ".";
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    }
  }

  result(){
    switch(this.expressionType){
      case "add":
        this.resultNumber = Number(this.firstNumber) + Number(this.secondNumber)
        this.expressionShowing = String(this.resultNumber);
        this.firstNumber = String(this.resultNumber);
        this.secondNumber = "";
        break;
      case "subtraction":
        this.resultNumber = Number(this.firstNumber) - Number(this.secondNumber)
        this.expressionShowing = String(this.resultNumber);
        this.firstNumber = String(this.resultNumber);
        this.secondNumber = "";
        break;
      case "multiply":
        this.resultNumber = Number(this.firstNumber) * Number(this.secondNumber)
        this.expressionShowing = String(this.resultNumber);
        this.firstNumber = String(this.resultNumber);
        this.secondNumber = "";
        break;
      case "divide":
        this.resultNumber = Number(this.firstNumber) / Number(this.secondNumber)
        this.expressionShowing = String(this.resultNumber);
        this.firstNumber = String(this.resultNumber);
        this.secondNumber = "";
        break;
      case "modulo":
        this.resultNumber = Number(this.firstNumber) % Number(this.secondNumber)
        this.expressionShowing = String(this.resultNumber);
        this.firstNumber = String(this.resultNumber);
        this.secondNumber = "";
        break;
      default:
        break;
    }
  }

  addNumbers():void {
    if(this.firstNumber !== ""){
    this.firstNumberIsSet = true;
    this.expressionType = "add";
    this.expressionChosen = this.expressionSign[0];
    this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else if(this.firstNumber === ""){
      return;
    }
  }

  subtractionNumbers():void {
    if(this.firstNumber !== ""){
      this.firstNumberIsSet = true;
      this.expressionType = "subtraction";
      this.expressionChosen = this.expressionSign[1];
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else if(this.firstNumber === ""){
      return;
    }
  }
  multiplyNumbers():void {
    if(this.firstNumber !== ""){
      this.firstNumberIsSet = true;
      this.expressionType = "multiply";
      this.expressionChosen = this.expressionSign[2];
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else if(this.firstNumber === ""){
      return;
    }
  }
  divideNumbers():void {
    if(this.firstNumber !== ""){
      this.firstNumberIsSet = true;
      this.expressionType = "divide";
      this.expressionChosen = this.expressionSign[3];
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else if(this.firstNumber === ""){
      return;
    }
  }
  moduloNumbers():void {
    if(this.firstNumber !== ""){
      this.firstNumberIsSet = true;
      this.expressionType = "modulo";
      this.expressionChosen = this.expressionSign[4];
      this.expressionShowing = this.firstNumber + this.expressionChosen + this.secondNumber;
    } else if(this.firstNumber === ""){
      return;
    }
  }

  squareResult(){
    this.resultNumber = Math.sqrt(Number(this.firstNumber));
    this.expressionShowing = String(this.resultNumber);
    this.firstNumber = String(this.resultNumber);
  }

  square(): void {
    if(this.firstNumber !== ""){
      this.squareResult();
    } else if(this.firstNumber === ""){
      return;
    }
  }
   
}
