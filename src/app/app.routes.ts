import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Posts } from './posts/posts';
import { PostDetails } from './post-details/post-details';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [

    {
        path: '',
        component: Home
    }, 
    {
        path: 'posts',
        component: Posts
    }, 
    {
        path: 'posts/:id',
        component: PostDetails
    }, 
    {
        path: '**',
        component: NotFound
    }

];

