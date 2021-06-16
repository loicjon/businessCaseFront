import { Component, OnInit } from '@angular/core';
import {ProfessionalService} from '../../../../services/api-data/professional/professional.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css']
})
export class ProfessionalListComponent implements OnInit {

  professionals: any;
  currentProfessional = null;
  currentIndex = -1;
  corporateName = '';

  totalLength: any;
  page = 1;


  constructor(private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.retrieveProfessionals();
  }

  retrieveProfessionals(): void {
    this.professionalService.getAll()
      .subscribe(
        data => {
          this.professionals = data['hydra:member'];
          this.totalLength = data.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveProfessional(professional, index): void {
    this.currentProfessional = professional;
    this.currentIndex = index;
  }


  refreshList(): void {
    this.retrieveProfessionals();
    this.currentProfessional = null;
    this.currentIndex = -1;
  }


  searchCorporateName(): void {
    this.professionalService.findByCorporateName(this.corporateName)
      .subscribe(
        data => {
          this.professionals = data['hydra:member'];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
