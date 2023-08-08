import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

// ng g c products/product-detail --flat
//The above command I used to generate the product-detail component files without the folder

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `:${id}`;
    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      description: '',
      imageUrl: '',
      price: 10,
      productCode: '',
      releaseDate: '',
      starRating: 3,
    };
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
