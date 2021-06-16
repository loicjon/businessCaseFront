import { Component, OnInit } from '@angular/core';
import {ModelService} from '../../../../services/api-data/model/model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  models: any;
  currentModel = null;
  currentIndex = -1;
  modelName = '';

  totalLength: any;
  page = 1;

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.retrieveModels();
  }

  retrieveModels(): void {
    this.modelService.getAll()
      .subscribe(
        data => {
          this.models = data['hydra:member'];
          this.totalLength = data.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveModels();
    this.currentModel = null;
    this.currentIndex = -1;
  }

  setActiveModel(model, index): void {
    this.currentModel = model;
    this.currentIndex = index;
  }

  removeAllModels(): void {
    this.modelService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveModels();
        },
        error => {
          console.log(error);
        });
  }

    searchModelName(): void {
      this.modelService.findByModelName(this.modelName)
        .subscribe(
          data => {
            this.models = data['hydra:member'];
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

}
