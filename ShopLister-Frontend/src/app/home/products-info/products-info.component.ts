import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css'],
})
export class ProductsInfoComponent implements OnInit {
  dataSource: any;
  id = this.actiRoute.snapshot.params['id'];

  constructor(
    private shopServices: ProductService,
    private actiRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getShopInfo();
  }

  getShopInfo() {
    this.shopServices.getShopInfo(this.id).subscribe((res) => {
      this.dataSource = JSON.parse(JSON.stringify(res));
      console.log(this.dataSource);
    });
  }

  signOut() {
    this.router.navigate(['/auth/login']);
  }
  delete() {
    this.shopServices.delete(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  edit() {
    this.router.navigate(['/']);
  }
}
