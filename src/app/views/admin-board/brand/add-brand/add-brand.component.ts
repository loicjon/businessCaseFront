import { Component, OnInit } from '@angular/core';
import {BrandService} from '../../../../services/api-data/brand/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brand = {
    brandName: '',

  };
  submitted = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
  }

  saveBrand(): void {
    const data = {
      brandName: this.brand.brandName,
    };

    this.brandService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newBrand(): void {
    this.submitted = false;
    this.brand = {
      brandName: '',
    };
  }
}

