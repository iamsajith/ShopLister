import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopModel } from 'src/app/shared/models/shop.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css'],
})
export class ProductsInfoComponent implements OnInit {
  dataSource: any;
  id = this.actiRoute.snapshot.params['id'];
  url: any;
  displayStyle = 'none';
  shop = new ShopModel('', '', '', '', '', '');
  photo=""
  categories = [
    'Grocery/Supermarket',
    'Convenience Store',
    'Big Box/Superstore',
    'Specialty Store',
    'Department Store',
    'Discount Store',
    'Off-Price Retailer',
    'Warehouse',
  ];

  constructor(
    private shopServices: ProductService,
    private actiRoute: ActivatedRoute,
    private router: Router,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getShopInfo();
  }

  getShopInfo() {
    this.shopServices.getShopInfo(this.id).subscribe((res) => {
      this.dataSource = JSON.parse(JSON.stringify(res));
      this.shop = this.dataSource
      console.log(this.photo);
    });
  }

  signOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login']);
  }
  delete() {
    this.shopServices.delete(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  edit() {
    if(this.photo !== ""){
      console.log("photo available")
    this.shop.image = this.url
    }
console.log(this.shop)
    this.shopServices.editInfo(this.id,this.shop).subscribe(()=>{
      alert("Updated")
    })

    window.location.reload()
  }
  view() {
    this.displayStyle = 'block';
  }
  closeview() {
    this.displayStyle = 'none';
  }
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return;
    }
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      console.log(this.url);
    };
  }
}
