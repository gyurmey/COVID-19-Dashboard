import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  datas: Array<any>;
  totalInfected : number;
  totalDeceased: any;
  date : any;
  percentage: number;
  panelOpenState = false;
  
  constructor(private ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.ServicesService.getDatas().subscribe(datas => {
      this.datas = datas.infectedByRegion;
      this.totalDeceased = datas.deceased;
      this.totalInfected = datas.infected;
      this.date = datas.lastUpdatedAtApify;
this.percentage = Math.round(this.totalInfected / 8300000 * 100);

      console.log(datas)
      // console.log(this.percentage)

    })
  }


}
