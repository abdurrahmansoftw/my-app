import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [DetailsComponent, RouterLink],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.scss',
})
export class GallaryComponent {
  pixabays: any[] = [];

  constructor(private DataService: DataService) {
    this.DataService.getPixabays().subscribe((pixabays: any) => {
      this.pixabays = pixabays.hits;
    });
  }
}
