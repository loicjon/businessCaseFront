import { Component, OnInit } from '@angular/core';
import {AdService} from '../../../../services/api-data/ad/ad.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  ad = {
    title: '',
    price: '',
    age: '',
    mileage: '',
    adPostingDate: '',
    generalDescription: '',
    feature: '',
    garage: '',
    picture: '',
    model: '',
    fuel: '',
    brand: '',
  };
  submitted = false;

  constructor(private adService: AdService) { }

  ngOnInit(): void {
  }

  saveAd(): void {
    const data = {
      title: this.ad.title,
      price: this.ad.price,
      age: this.ad.age,
      mileage: this.ad.mileage,
      adPostingDate: this.ad.adPostingDate,
      generalDescription: this.ad.generalDescription,
      feature: this.ad.feature,
      garage: this.ad.garage,
      picture: this.ad.picture,
      model: this.ad.model,
      fuel: this.ad.fuel,
      brand: this.ad.brand,
    };

    this.adService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAd(): void {
    this.submitted = false;
    this.ad = {
      title: '',
      price: '',
      age: '',
      mileage: '',
      adPostingDate: '',
      generalDescription: '',
      feature: '',
      garage: '',
      picture: '',
      model: '',
      fuel: '',
      brand: '',
    };
  }

}
