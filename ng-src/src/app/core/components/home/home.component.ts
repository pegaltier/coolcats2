import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';

// lib
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// project
import { PostService } from '@store/services/entities/post.service';
import { Observable, Subscription } from 'rxjs';
import { Post } from '@core/models';
import { QueryParams } from '@ngrx/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('modal', { static: true })
  modal: ElementRef;

  @Input() newPost: Observable<void>;

  logged: boolean = false;
  post: Post = { id: '', message: 'ggg', stamp: 'stamp' };

  // obs
  postLoading$: Observable<boolean>;
  posts$: Observable<Post[]>;
  eventsSubscription: Subscription;

  constructor(private modalService: NgbModal,
    private postService: PostService) {
    this.posts$ = postService.entities$;
    this.postLoading$ = postService.loading$;
  }

  ngOnInit() {
    this.eventsSubscription = this.newPost.subscribe(() => this.openPostModal());
    this.logged = true;
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }

  postMessage(): void {
    // @ts-ignore
    this.postService.add(this.post).subscribe(res => this.postService.getWithQuery({ index: 1, hashtag: "#hh2"}));
    this.modalService.dismissAll();
  }

  openPostModal() {
    this.modalService.open(this.modal, { ariaLabelledBy: 'modal-basic-title' });
  }


}
