import { Component, OnInit } from '@angular/core';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {Ad} from '../../models/api-model/ad/ad';
import {Fuel} from '../../models/api-model/fuel/fuel';
import {AdService} from '../../services/api-data/ad/ad.service';
import {FuelService} from '../../services/api-data/fuel/fuel.service';
import {ModelService} from '../../services/api-data/model/model.service';
import {BrandService} from '../../services/api-data/brand/brand.service';
import {Model} from '../../models/api-model/model/model';
import {Brand} from '../../models/api-model/brand/brand';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private brandService: BrandService,
    private adService: AdService,
    private fuelService: FuelService,
    private modelService: ModelService,
    private router: Router
  ) { }

  brands: Brand[];
  fuels: Fuel[];
  models: string | any[];
  // tslint:disable-next-line:ban-types
  ads: Object;
  carForm: FormGroup;

  ngOnInit(): void {
    this.brandService.getAll().subscribe(data => {
      this.brands = data['hydra:member'];
      console.log(this.brands);
    });

    this.adService.getAll().subscribe(data => {
      this.ads = data['hydra:member'];
      console.log(this.ads);
    });

    this.modelService.getAll().subscribe(data => {
      this.models = data['hydra:member'];
      console.log(this.models);
    });

    this.fuelService.getAll().subscribe(data => {
      this.fuels = data['hydra:member'];
      console.log(this.fuels);
    });


    this.carForm = new FormGroup({
      brand: new FormControl(''),
      model: new FormControl(''),
      fuel: new FormControl('')
    });

  }

  handleBrandChange(brandName): void {


if (brandName) {
  // @ts-ignore
  this.adService.findByBrand(brandName).subscribe(
    data => this.ads = data
  );
} else {
  this.ads = null;
}

    /*
    const model = document.querySelector(`select[name="model"]`);

    if (value === '' || value === '...') {
      model.setAttribute('disabled', 'disabled');
    } else {
      model.removeAttribute('disabled');


      // tslint:disable-next-line:triple-equals
      const index = this.brands.findIndex(b => b.id == index);
      this.models = index !== -1 ? this.brands[index].model || [Model] : [value];
    }
  */
  }

  // tslint:disable-next-line:typedef
  modelChange(modelName): void {
    if (modelName) {
      // @ts-ignore
      this.adService.findByModel(modelName).subscribe(
        data => this.ads = data
      );
    } else {
      this.ads = null;
    }
  }

  // tslint:disable-next-line:typedef
  fuelChange(type): void {
    if (type) {
      // @ts-ignore
      this.adService.findByFuel(type).subscribe(
        data => this.ads = data
      );
    } else {
      this.ads = null;
    }
  }

  // tslint:disable-next-line:typedef
  onSubmitSearchCars() {

  }
}
