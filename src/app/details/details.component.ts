import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  productId: number = 0;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      });
    });
  }
}
