import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() datas 


  displayedColumns: string[] = ['States', 'infectedCount', 'deceaseCount'];


  sortedInfectedData: string;

  constructor() {}
  ngOnInit(): void {
  this.datas.sort(sortInfectedCount);
  }
}
function sortInfectedCount(a, b) {
  return parseFloat(a.infectedCount) - parseFloat(b.infectedCount);
}
