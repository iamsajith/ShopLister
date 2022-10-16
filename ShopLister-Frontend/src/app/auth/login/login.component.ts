import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  User = new AuthModel('', '', '');

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if (this._auth.loggedIn()) {
      this._router.navigate(['/']);
    }
  }

  Verify(){
    this._auth.Verify(this.User).subscribe((res) => {
      console.log(res)
      localStorage.setItem('token',JSON.parse(JSON.stringify(res)).token)
      this._router.navigate(['/']);
    });
  }
}
