import { Component, OnInit } from '@angular/core';
import {FuelService} from '../../../../services/api-data/fuel/fuel.service';

@Component({
  selector: 'app-fuel-list',
  templateUrl: './fuel-list.component.html',
  styleUrls: ['./fuel-list.component.css']
})
export class FuelListComponent implements OnInit {

  fuels: any;
  currentFuel = null;
  currentIndex = -1;
  fuelType = '';
  type: '';

  constructor(private fuelService: FuelService) { }

  ngOnInit(): void {
    this.retrieveFuels();
  }

  retrieveFuels(): void {
    this.fuelService.getAll()
      .subscribe(
        data => {
          this.fuels = data['hydra:member'];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFuels();
    this.currentFuel = null;
    this.currentIndex = -1;
  }

  setActiveFuel(fuel, index): void {
    this.currentFuel = fuel;
    this.currentIndex = index;
  }

  removeAllFuels(): void {
    this.fuelService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveFuels();
        },
        error => {
          console.log(error);
        });
  }

    searchFuelType(): void {
      this.fuelService.findByFuelType(this.type)
        .subscribe(
          data => {
            this.fuels = data['hydra:member'];
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

}

