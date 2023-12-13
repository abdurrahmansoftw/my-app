import { Component } from '@angular/core';
import { GallaryComponent } from '../gallary/gallary.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [GallaryComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
