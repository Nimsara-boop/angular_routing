import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
  private route = inject(ActivatedRoute);

  id = toSignal(this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  ), {initialValue: 1}
  );
  nextId = computed(() => this.id() + 1);
  prevId = computed(() => this.id() - 1);

  prevPostAvailable = computed(() => this.id()>1);
  nextPostAvailable = computed(() => this.id() < 3);

}
