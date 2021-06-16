import { Component, OnInit } from '@angular/core';
import {GarageService} from '../../../../services/api-data/garage/garage.service';

@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.css']
})
export class AddGarageComponent implements OnInit {
  garage = {
    garageName: '',
    mail: '',
    phone: '',
    address: '',
    postalCode: '',
    town: '',
    country: '',
    professional: '',
  };
  submitted = false;

  constructor(private garageService: GarageService) { }

  ngOnInit(): void {
  }

  saveGarage(): void {
    const data = {
      garageName: this.garage.garageName,
      mail: this.garage.mail,
      phone: this.garage.phone,
      address: this.garage.address,
      postalCode: this.garage.postalCode,
      town: this.garage.town,
      country: this.garage.country,
      professional: this.garage.professional,
    };

    this.garageService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newGarage(): void {
    this.submitted = false;
    this.garage = {
      garageName: '',
      mail: '',
      phone: '',
      address: '',
      postalCode: '',
      town: '',
      country: '',
      professional: '',
    };
  }
}
