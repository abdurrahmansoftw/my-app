import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input() rating: number = 0;
  maxRating: number = 5;
  starIconPath: string = 'path-to-your-star-icon.svg';

  get filledStars(): boolean[] {
    const filledStars = new Array(this.maxRating).fill(false);
    for (let i = 0; i < Math.floor(this.rating); i++) {
      filledStars[i] = true;
    }
    return filledStars;
  }
}
