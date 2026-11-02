import { Component, inject } from '@angular/core';
import { PostsServices } from '../services/posts.services';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})


export class Posts {
  private postsServices = inject(PostsServices);
  postsList = toSignal(this.postsServices.getPosts(), {initialValue:[]});
}
