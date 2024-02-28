import { Component, Input, OnInit } from '@angular/core';
import { saveOp } from 'src/app/models/calculate';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  @Input() history!: saveOp[];

  ngOnInit(): void {
    console.log(this.history)
  }

}
