import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  datas: any;
  totalInfected : any;
  totalDeceased: any;
  date : any;

  constructor(private ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.ServicesService.getDatas().subscribe(datas => {
      this.datas = datas.infectedByRegion;
      this.totalDeceased = datas.deceased;
      this.totalInfected = datas.infected;
      this.date = datas.lastUpdatedAtApify;
      console.log(datas)
    })
  }

}
