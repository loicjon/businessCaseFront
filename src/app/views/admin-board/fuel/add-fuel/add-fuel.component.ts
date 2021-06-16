import { Component, OnInit } from '@angular/core';
import {FuelService} from '../../../../services/api-data/fuel/fuel.service';

@Component({
  selector: 'app-add-fuel',
  templateUrl: './add-fuel.component.html',
  styleUrls: ['./add-fuel.component.css']
})
export class AddFuelComponent implements OnInit {

  fuel = {
    type: '',

  };
  submitted = false;

  constructor(private fuelService: FuelService) { }

  ngOnInit(): void {
  }

  saveFuel(): void {
    const data = {
      type: this.fuel.type,
    };

    this.fuelService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newFuel(): void {
    this.submitted = false;
    this.fuel = {
      type: '',
    };
  }
}

