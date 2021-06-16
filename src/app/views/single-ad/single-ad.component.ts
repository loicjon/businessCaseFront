import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdService} from '../../services/api-data/ad/ad.service';
import {Ad} from '../../models/api-model/ad/ad';

@Component({
  selector: 'app-single-ad',
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.css']
})
export class SingleAdComponent implements OnInit {
  id: number;
  ad: Ad;

  constructor(
    private adService: AdService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.carId;

    this.adService.get(this.id).subscribe((data: Ad) => {
      this.ad = data;
    });
  }

}
