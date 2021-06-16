import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdService} from '../../services/api-data/ad/ad.service';
import {Ad} from '../../models/api-model/ad/ad';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-carview',
  templateUrl: './carview.component.html',
  styleUrls: ['./carview.component.css']
})
export class CarviewComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  ads: Observable<Object>;

  constructor(private route: ActivatedRoute,
              private adService: AdService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.adService.getAll().subscribe(data => {
      this.ads = data['hydra:member'];
      console.log(this.ads);

    });
    this.getAd(this.route.snapshot.paramMap.get('id'));
  }

  getAd(id): void {
    this.adService.get(id)
      .subscribe(
        data => {
          this.ads = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
