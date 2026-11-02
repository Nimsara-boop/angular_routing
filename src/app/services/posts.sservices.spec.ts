import { TestBed } from '@angular/core/testing';

import { PostsServices } from './posts.services';

describe('Posts', () => {
  let service: PostsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
