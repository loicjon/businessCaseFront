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
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-research-bar',
  templateUrl: './research-bar.component.html',
  styleUrls: ['./research-bar.component.css']
})
export class ResearchBarComponent  implements OnInit {

constructor(private adService: AdService,
            private brandService: BrandService,
            private fuelService: FuelService,
            private modelService: ModelService, ) {
}

  ads: Ad[];
  brands: Brand[];
  fuels: Fuel[];
  models: string | any[];


  minValue = 0;
  maxValue = 15000;
  options: Options = {
    floor: 0,
    ceil: 15000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> €' + value;
        case LabelType.High:
          return '<b>Max price:</b> €' + value;
        default:
          return '€' + value;
      }
    }
  };

  // tslint:disable-next-line:typedef
  carForm: FormGroup;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

    this.adService.getAll().subscribe(data => {
      this.ads = data['hydra:member'];
      console.log(this.ads);

    });

    this.modelService.getAll().subscribe(data => {
      this.models = data['hydra:member'];
      console.log(this.models);
    });

    this.brandService.getAll().subscribe(data => {
      this.brands = data['hydra:member'];
      console.log(this.brands);
    });

    this.fuelService.getAll().subscribe(data => {
      this.fuels = data['hydra:member'];
      console.log(this.fuels);
    });

  }
  // tslint:disable-next-line:typedef
  handleBrandChange(value): void {
    const model = document.querySelector(`select[name="model"]`);

    if (value === '' || value === '...') {
      model.setAttribute('disabled', 'disabled');
    } else {
      model.removeAttribute('disabled');


      // tslint:disable-next-line:triple-equals
      const index = this.brands.findIndex(b => b.id == index);
      this.models = index !== -1 ? this.brands[index].model || [Model] : [value];
    }
  }

  // tslint:disable-next-line:typedef
  handleSubmit() {

  }

  // tslint:disable-next-line:typedef
  onSubmitSearchCars() {

  }
}
