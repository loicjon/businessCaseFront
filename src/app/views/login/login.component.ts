import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/user';
import {AuthService} from '../../services/auth/auth.service';
import {TokenStorageService} from '../../services/token-storage/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser = new User();
  isLoginFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  roles: string[] = [];

  constructor(private authent: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {

    this.authent.login(this.formUser).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);

        this.authent.saveUser(data.token).subscribe(then =>
        {
          this.tokenStorage.saveUser(then);
          this.router.navigate(['/home']);
        });



        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
