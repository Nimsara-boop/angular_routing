import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../posts/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsServices {
  private HttpClient = inject(HttpClient);

  private apiURL='https://jsonplaceholder.typicode.com/posts';

  getPosts(){
    return this.HttpClient.get<Post[]>(this.apiURL);
  }
  
}
