import { Component, OnInit } from '@angular/core';
import {ProfessionalService} from '../../../../services/api-data/professional/professional.service';

@Component({
  selector: 'app-add-professional',
  templateUrl: './add-professional.component.html',
  styleUrls: ['./add-professional.component.css']
})
export class AddProfessionalComponent implements OnInit {

  professional = {
    corporateName: '',
    mail: '',
    phone: '',
    siretNumer: '',
    user: '',
  };
  submitted = false;

  constructor(private professionalService: ProfessionalService) { }

  ngOnInit(): void {
  }

  saveProfessional(): void {
    const data = {
      corporateName: this.professional.corporateName,
      mail: this.professional.mail,
      phone: this.professional.phone,
      siretNumer: this.professional.siretNumer,
      user: this.professional.user,
    };

    this.professionalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProfessional(): void {
    this.submitted = false;
    this.professional = {
      corporateName: '',
      mail: '',
      phone: '',
      siretNumer: '',
      user: '',
    };
  }

}
