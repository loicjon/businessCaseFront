import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModelService} from '../../../../services/api-data/model/model.service';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css']
})
export class ModelDetailsComponent implements OnInit {

  currentModel = null;
  message = '';


  constructor(
    private modelService: ModelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getModel(this.route.snapshot.paramMap.get('id'));
  }

  getModel(id): void {
    this.modelService.get(id)
      .subscribe(
        data => {
          this.currentModel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateModel(): void {
    this.modelService.update(this.currentModel.id, this.currentModel)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Model was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteModel(): void {
    this.modelService.delete(this.currentModel.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/models']);
        },
        error => {
          console.log(error);
        });
  }

}
