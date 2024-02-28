import { Component } from '@angular/core';
import { saveOp } from 'src/app/models/calculate';
import { HistoryServices } from '../../services/history.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  tittle: string = 'Proyecto Calculadora';
  widthMenu: number = -130;
  num1: any = '';
  op: string = '';
  num2: any = '';
  view: string = '';
  history: saveOp[] = []; 

  constructor(private historyData: HistoryServices) {}


  /* * * * * * * * * * * */
  /* Calculadora basica */
  /* Calculadora basica */
  /* * * * * * * * * * * */

  addNum(num: any){
    if(!this.op){
      this.num1 = this.num1 + num;
    }else{
      this.num2 = this.num2 + num;
    }
    this.view = this.num1 + this.op + this.num2;
  }

  operation(op: string){
    this.op = op;
    this.view = this.num1 + this.op + this.num2;
  }

  result(){
    if(this.num1 && this.num2){
      let historyOb: saveOp = {historyOp: '', historyRes: ''};  
      historyOb.historyOp = this.view; 
      switch (this.op) {
        case '+':
          this.view = (parseFloat(this.num1) + parseFloat(this.num2)).toString();
          break;
        case '-':
          this.view = (parseFloat(this.num1) - parseFloat(this.num2)).toString();
          break;
        case '*':
          this.view = (parseFloat(this.num1) * parseFloat(this.num2)).toString();
          break;
        case '/':
          this.view = (parseFloat(this.num1) / parseFloat(this.num2)).toString();
          break;
        default:
          this.view = 'Seleccione una operación';
          break;
      }

      historyOb.historyRes = this.view;
      this.history.push(historyOb);
      this.num1 = this.view;
      this.op = '';
      this.num2 = '';
    }
  }

  delete(){
    if(!this.op){
      this.num1 = this.num1.toString().slice(0, -1);
    }else{
      this.num2 = this.num2.toString().slice(0, -1);
    }
    this.view = this.num1 + this.op + this.num2;
  }

  clear(){
    this.num1 = '';
    this.op = '';
    this.num2 = '';
    this.view = '';
  }
  
  /* * * * * * * */
  /* Menu Hover */
  /* * * * * * * */

  toggleMenu(hover: Boolean){
    this.widthMenu = hover ? 0 : -130;
  }

  /* * * * * */
  /* History */
  /* * * * * */

  

}