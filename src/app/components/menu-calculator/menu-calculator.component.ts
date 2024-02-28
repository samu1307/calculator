import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { saveOp } from 'src/app/models/calculate';

@Component({
  selector: 'app-menu-calculator',
  templateUrl: './menu-calculator.component.html',
  styleUrls: ['./menu-calculator.component.css']
})
export class MenuCalculatorComponent implements OnChanges{

  @Input() opArr!: saveOp[]; 

  historyDiv: number = -300;
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['opArr']){
      
    }
  }

  openHistory(){
    (this.historyDiv === 0)? this.historyDiv = -300 : this.historyDiv = 0;
    console.log(this.opArr)
  }

}
