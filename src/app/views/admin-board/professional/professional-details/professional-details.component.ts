import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfessionalService} from '../../../../services/api-data/professional/professional.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  currentProfessional = null;
  message = '';

  constructor(
    private professionalService: ProfessionalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getProfessional(this.route.snapshot.paramMap.get('id'));
  }

  getProfessional(id): void {
    this.professionalService.get(id)
      .subscribe(
        data => {
          this.currentProfessional = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProfessional(): void {
    this.professionalService.update(this.currentProfessional.id, this.currentProfessional)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Professional was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProfessional(): void {
    this.professionalService.delete(this.currentProfessional.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/professionals']);
        },
        error => {
          console.log(error);
        });
  }

}
