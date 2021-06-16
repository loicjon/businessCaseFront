import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage/token-storage.service';


@Component({
  selector: 'app-professional-board',
  templateUrl: './professional-board.component.html',
  styleUrls: ['./professional-board.component.css']
})
export class ProfessionalBoardComponent implements OnInit {

  roles: string[];
  isLoggedIn = false;
  username: string;


  constructor(
    private tokenStorageService: TokenStorageService
  ) { }



  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
