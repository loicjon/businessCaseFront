import { Component, OnInit } from '@angular/core';
import {GarageService} from '../../../../services/api-data/garage/garage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-garage-details',
  templateUrl: './garage-details.component.html',
  styleUrls: ['./garage-details.component.css']
})
export class GarageDetailsComponent implements OnInit {

  currentGarage = null;
  message = '';


  constructor(
    private garageService: GarageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getGarage(this.route.snapshot.paramMap.get('id'));
  }

  getGarage(id): void {
    this.garageService.get(id)
      .subscribe(
        data => {
          this.currentGarage = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateGarage(): void {
    this.garageService.update(this.currentGarage.id, this.currentGarage)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Garage was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteGarage(): void {
    this.garageService.delete(this.currentGarage.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/garages']);
        },
        error => {
          console.log(error);
        });
  }

}
