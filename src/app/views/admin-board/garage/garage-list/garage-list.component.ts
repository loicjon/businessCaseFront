import { Component, OnInit } from '@angular/core';
import {GarageService} from '../../../../services/api-data/garage/garage.service';
import {Garage} from '../../../../models/api-model/garage/garage';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css']
})
export class GarageListComponent implements OnInit {

  garages: any;
  currentGarage = null;
  currentIndex = -1;
  garageName = '';

  constructor(private garageService: GarageService) { }

  ngOnInit(): void {
    this.retrieveGarages();
  }

  retrieveGarages(): void {
    this.garageService.getAll()
      .subscribe(
        data => {
          this.garages = data['hydra:member'];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGarages();
    this.currentGarage = null;
    this.currentIndex = -1;
  }

  setActiveGarage(garage, index): void {
    this.currentGarage = garage;
    this.currentIndex = index;
  }

  removeAllGarages(): void {
    this.garageService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveGarages();
        },
        error => {
          console.log(error);
        });
  }

    searchGarageName(): void {
      this.garageService.findByGarageName(this.garageName)
        .subscribe(
          data => {
            this.garages = data['hydra:member'];
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
}
