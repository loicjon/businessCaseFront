import { Component, OnInit } from '@angular/core';
import {BrandService} from '../../../../services/api-data/brand/brand.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {

  currentBrand = null;
  message = '';


  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getBrand(this.route.snapshot.paramMap.get('id'));
  }

  getBrand(id): void {
    this.brandService.get(id)
      .subscribe(
        data => {
          this.currentBrand = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateBrand(): void {
    this.brandService.update(this.currentBrand.id, this.currentBrand)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Brand was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteBrand(): void {
    this.brandService.delete(this.currentBrand.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/brands']);
        },
        error => {
          console.log(error);
        });
  }

}
