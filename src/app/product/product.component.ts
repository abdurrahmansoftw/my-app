import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products: any[] = [];

  constructor(private DataService: DataService) {
    this.DataService.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }
}
