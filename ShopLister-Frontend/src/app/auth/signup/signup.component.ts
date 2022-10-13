import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  photo:any
  show= true
  userCred = new AuthModel('','','','','')

  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log("Signup Data",this.userCred)
    this._auth.Register(this.userCred).subscribe((res)=>{
      console.log("credentials",this.userCred)
      this._router.navigate(['../login'])
      console.log(res)
    })


  }
}
