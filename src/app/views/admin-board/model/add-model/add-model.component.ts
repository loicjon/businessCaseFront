import { Component, OnInit } from '@angular/core';
import {ModelService} from '../../../../services/api-data/model/model.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  model = {
    modelName: '',
    brand: ''

  };
  submitted = false;

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
  }

  saveModel(): void {
    const data = {
      modelName: this.model.modelName,
      brand: this.model.brand
    };

    this.modelService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newModel(): void {
    this.submitted = false;
    this.model = {
      modelName: '',
      brand: ''
    };
  }
}

