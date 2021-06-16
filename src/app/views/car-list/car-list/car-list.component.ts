import { Component, OnInit } from '@angular/core';
import {AdService} from '../../../services/api-data/ad/ad.service';
import {Ad} from '../../../models/api-model/ad/ad';
import {FuelService} from '../../../services/api-data/fuel/fuel.service';
import {Fuel} from '../../../models/api-model/fuel/fuel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  totalLength: any;
  page = 1;


  ads: Ad[];
  fuels: Fuel[];
  currentAd: null;


  constructor(private adService: AdService,
              private fuelService: FuelService,
              private router: Router) { }

  ngOnInit(): void {


    this.adService.getAllAd().subscribe(data => {
      this.ads = data['hydra:member'];

      this.totalLength = data.length;

      console.log(this.ads);

    });

    this.fuelService.getAll().subscribe(data => {
      this.fuels = data['hydra:member'];
      console.log(this.fuels);
    });

  }

  getAd(id): void {
    this.adService.get(id)
      .subscribe(
        data => {
          this.currentAd = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
