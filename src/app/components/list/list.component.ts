import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  datas: any;

  constructor(private ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.ServicesService.getDatas().subscribe(datas => {
      this.datas = datas.infectedByRegion;
      console.log(datas)
    })
  }

}
