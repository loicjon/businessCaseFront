import { Component, OnInit } from '@angular/core';
import {AdService} from '../../services/api-data/ad/ad.service';
import {Ad} from '../../models/api-model/ad/ad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalLength: any;
  page = 1;

  ads: any = [];

  constructor(
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.adService.getAllAd().subscribe(data => {
      this.ads = data['hydra:member'];

      this.totalLength = data.length;

      console.log(this.ads);

    });
  }

}
