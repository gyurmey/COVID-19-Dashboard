import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() datas : string[];

  constructor() { }

  displayedColumns: string[] = ['States', 'infectedCount', 'deceaseCount'];
  ngOnInit(): void {
  }

}
