import { Component, OnInit } from '@angular/core';
import {FuelService} from '../../../../services/api-data/fuel/fuel.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fuel-details',
  templateUrl: './fuel-details.component.html',
  styleUrls: ['./fuel-details.component.css']
})
export class FuelDetailsComponent implements OnInit {

  currentFuel = null;
  message = '';


  constructor(
    private fuelService: FuelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getFuel(this.route.snapshot.paramMap.get('id'));
  }

  getFuel(id): void {
    this.fuelService.get(id)
      .subscribe(
        data => {
          this.currentFuel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFuel(): void {
    this.fuelService.update(this.currentFuel.id, this.currentFuel)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Fuel was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFuel(): void {
    this.fuelService.delete(this.currentFuel.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/fuels']);
        },
        error => {
          console.log(error);
        });
  }

}
