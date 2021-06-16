import { Component, OnInit } from '@angular/core';
import {PictureService} from '../../../../services/api-data/picture/picture.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

  pictures: any;
  currentPicture = null;
  currentIndex = -1;
  pictureName = '';

  totalLength: any;
  page = 1;

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.retrievePictures();
  }

  retrievePictures(): void {
    this.pictureService.getAll()
      .subscribe(
        data => {
          this.pictures = data['hydra:member'];
          this.totalLength = data.length;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePictures();
    this.currentPicture = null;
    this.currentIndex = -1;
  }

  setActivePicture(picture, index): void {
    this.currentPicture = picture;
    this.currentIndex = index;
  }

  removeAllPictures(): void {
    this.pictureService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePictures();
        },
        error => {
          console.log(error);
        });
  }
    searchPictureName(): void {
      this.pictureService.findByPictureName(this.pictureName)
        .subscribe(
          data => {
            this.pictures = data['hydra:member'];
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
}
