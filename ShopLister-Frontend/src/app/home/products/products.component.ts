import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopModel } from 'src/app/shared/models/shop.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name!:string
  userFilter: any = { shop_name: '' };
  user_data: any;
  url:any
  dataSource:any
  p : number = 1;
  photo:any
  displayStyle = "none";
  shop = new ShopModel('','','','','','')
  categories= ['Grocery/Supermarket','Convenience Store','Big Box/Superstore','Specialty Store','Department Store','Discount Store','Off-Price Retailer','Warehouse']

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

  addShop(){
    this.shop.image = this.url
    console.log(this.shop)
  }
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return
    }
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return
    }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result
      console.log(this.url)
      // this.imgshow = false
    }
  }
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
