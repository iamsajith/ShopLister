import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name:string=""
  userFilter: any = { shop_name: '' };
  user_data: any;
  resultsLength = 0;
  dataSource:any
  p : number = 1;
  displayStyle = "none";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  view(){
    this.displayStyle = "block";
    // this._student.getCourses().subscribe((data)=>{
    // this.array = JSON.parse(JSON.stringify(data))
    // this.courses = this.array[0].course
    // }
    // )

  }
  closeview(){
    this.displayStyle = "none";
  }

  shopDetails(id:any) {
    let route = 'dashboard/view'
    console.log(id)
    localStorage.setItem("SHOP-ID",id)
    this.router.navigate([route,id]);
  }

  addShop(){}
  signOut(){
    this.router.navigate(['/auth/login'])
  }


  search()
  {
    if(this.name=""){
      this.ngOnInit()
    }
    else{
      this.dataSource = this.dataSource.filter( (res: { name: string; }): any=>{

        return res.name.toLowerCase().match(this.name.toLowerCase());

      })
    }
  }

}
