import { Component, OnInit } from '@angular/core';
import {PictureService} from '../../../../services/api-data/picture/picture.service';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {

  picture = {
    pictureName: '',
    pictureLink: '',
  };
  submitted = false;

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
  }

  savePicture(): void {
    const data = {
      pictureName: this.picture.pictureName,
      pictureLink: this.picture.pictureLink
    };

    this.pictureService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newPicture(): void {
    this.submitted = false;
    this.picture = {
      pictureName: '',
      pictureLink: ''
    };
  }
}

