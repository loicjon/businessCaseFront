import { Component, OnInit } from '@angular/core';
import {BrandService} from '../../../../services/api-data/brand/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: any;
  currentBrand = null;
  currentIndex = -1;
  brandName = '';

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.retrieveBrands();
  }

  retrieveBrands(): void {
    this.brandService.getAll()
      .subscribe(
        data => {
          this.brands = data['hydra:member'];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBrands();
    this.currentBrand = null;
    this.currentIndex = -1;
  }

  setActiveBrand(brand, index): void {
    this.currentBrand = brand;
    this.currentIndex = index;
  }

  removeAllBrands(): void {
    this.brandService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveBrands();
        },
        error => {
          console.log(error);
        });
  }

    searchBrandName(): void {
      this.brandService.findByBrandName(this.brandName)
        .subscribe(
          data => {
            this.brands = data['hydra:member'];
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
}
