import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// project
import { PostService } from '@store/services/entities/post.service';
import { Post } from '@core/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  loading$: Observable<boolean>;
  anchors$: Observable<Post[]>;
  post1 = {};
  post2 = {};
  post3 = {};

  constructor(private postService: PostService) {
    this.anchors$ = postService.entities$;
    this.loading$ = postService.loading$;
  }
 
  ngOnInit() { }
  
  getAll() {
    this.postService.getAll();
  }

  add(post: Post) {
    this.postService.add(post);
  }

  getById(post: Post) {
    this.postService.getByKey(post.id);
  }

  getWithQuery(post: Post) {
    this.postService.getWithQuery(post as any);
  }
}
