import { Component, OnInit } from '@angular/core';
import {PictureService} from '../../../../services/api-data/picture/picture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {

  currentPicture = null;
  message = '';


  constructor(
    private pictureService: PictureService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPicture(this.route.snapshot.paramMap.get('id'));
  }

  getPicture(id): void {
    this.pictureService.get(id)
      .subscribe(
        data => {
          this.currentPicture = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePicture(): void {
    this.pictureService.update(this.currentPicture.id, this.currentPicture)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Picture was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePicture(): void {
    this.pictureService.delete(this.currentPicture.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/pictures']);
        },
        error => {
          console.log(error);
        });
  }

}
