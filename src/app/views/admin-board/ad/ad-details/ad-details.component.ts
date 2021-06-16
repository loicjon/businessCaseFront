import { Component, OnInit } from '@angular/core';
import {AdService} from '../../../../services/api-data/ad/ad.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

  currentAd = null;
  message = '';

  constructor(
    private adService: AdService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getAd(this.route.snapshot.paramMap.get('id'));
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

  updateAd(): void {
    this.adService.update(this.currentAd.id, this.currentAd)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Ad was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAd(): void {
    this.adService.delete(this.currentAd.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/ads']);
        },
        error => {
          console.log(error);
        });
  }

}
