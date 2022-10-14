import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopModel } from 'src/app/shared/models/shop.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name!:string
  userFilter: any = { shopname: '' };
  user_data: any;
  url:any
  dataSource:any
  p : number = 1;
  photo:any
  displayStyle = "none";
  shop = new ShopModel('','','','','','')
  categories= ['Grocery/Supermarket','Convenience Store','Big Box/Superstore','Specialty Store','Department Store','Discount Store','Off-Price Retailer','Warehouse']

  constructor(private router:Router,private shopService:ProductService) { }

  ngOnInit(): void {
    this.getShops()
  }

  view(){
    this.displayStyle = "block";
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
  getShops(){
    this.shopService.getShops().subscribe((res)=>{
      this.dataSource = JSON.parse(JSON.stringify(res))
      console.log(this.dataSource[0].city)
    })
  }
  addShop(){
    this.shop.image = this.url
    this.shopService.Register(this.shop).subscribe(()=>{
      console.log("Shop is added")
    })
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
