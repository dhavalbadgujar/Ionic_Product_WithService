import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { products } from '../product.modal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  loadproduct:products;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService
    )     { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('proid')){
        return;
      }
      const proid=paramMap.get('proid');
     // this.productService.getProduct(proid);
     this.loadproduct= this.productService.getProduct(proid);
    });
  }

}
