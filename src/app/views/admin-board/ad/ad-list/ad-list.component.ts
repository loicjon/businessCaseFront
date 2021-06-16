import { Component, OnInit } from '@angular/core';
import {AdService} from '../../../../services/api-data/ad/ad.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  ads: any;
  currentAd = null;
  currentIndex = -1;
  title = '';

  totalLength: any;
  page = 1;


  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.retrieveAds();
  }

  retrieveAds(): void {
    this.adService.getAll()
      .subscribe(
        data => {
          this.ads = data['hydra:member'];
          this.totalLength = data.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveAd(ad, index): void {
    this.currentAd = ad;
    this.currentIndex = index;
  }


  refreshList(): void {
    this.retrieveAds();
    this.currentAd = null;
    this.currentIndex = -1;
  }


  searchTitle(): void {
    this.adService.findByTitle(this.title)
      .subscribe(
        data => {
          this.ads = data['hydra:member'];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
