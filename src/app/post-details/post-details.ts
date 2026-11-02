import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
  private route = inject(ActivatedRoute);

  id = Number(this.route.snapshot.paramMap.get('id'));
  nextId = Number(this.id) + 1;
  prevID = Number(this.id) - 1;

  prevPostAvailable = this.checkPrevAvailability(this.id);
  nextPostAvailable = this.checkNextAvailability(this.id);

  checkPrevAvailability(id: number): boolean {
    if (id == 1) {
      return false;
    }
    return true;
  }
  checkNextAvailability(id: number): boolean {
    if (id == 3) {
      return false;
    }
    return true;
  }
}
