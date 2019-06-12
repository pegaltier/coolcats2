import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';

// lib
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// project
import { PostService } from '@store/services/entities/post.service';
import { Observable, Subscription } from 'rxjs';
import { Post } from '@core/models';
import { QueryParams } from '@ngrx/data';
import { HolochainService } from '@core/services/holochain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('modal1', { static: true }) modal1: ElementRef;
  @ViewChild('modal2', { static: true }) modal2: ElementRef;

  @Input() newPost$: Observable<void>;
  @Input() handle$: Observable<any>;

  private inst = 'test-instance';
  private zome = 'coolcats';
  post: Post = { id: '', message: 'ggg', stamp: 'stamp' };
  user = { handle: 'guest' };
  // obs
  postLoading$: Observable<boolean>;
  posts$: Observable<Post[]>;
  eventsSubscription: Subscription;
  handleSubscription: Subscription;

  constructor(private modalService: NgbModal,
    private hcService: HolochainService,
    private postService: PostService) {
    this.posts$ = postService.entities$;
    this.postLoading$ = postService.loading$;
  }

  ngOnInit() {
    this.eventsSubscription = this.newPost$.subscribe(() => this.openPostModal());
    this.handleSubscription = this.handle$.subscribe(res => this.checkHandle(res));
    //this.login('pegaltier');
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.handleSubscription.unsubscribe();
  }

  checkHandle(res) {
    if (res && res.value != undefined) {
      this.user.handle = res.value;
      this.getPostsFromHandle(res.value);
    } else {
      this.user.handle = 'guest';
    }
  }

  login(handle: string): void {
    this.hcService.callZome(this.inst, this.zome, 'use_handle', {
      handle: handle
    }).subscribe(res1 => {
      this.log('use_handle', res1);
      this.modalService.dismissAll();
    });
  }

  postMessage(): void {
    this.postService.add(this.post).subscribe(res => this.getPostsFromHandle(this.user.handle));
    this.modalService.dismissAll();
  }

  getPostsFromHandle(handle: string) {
    // @ts-ignore
    this.postService.getWithQuery({ index: 0, handles: [handle] });
  }

  getPostsFromHashtag(hashtag: string) {
    // @ts-ignore
    this.postService.getWithQuery({ index: 1, hashtag: hashtag });
  }

  openLoginModal() {
    this.modalService.open(this.modal1, { backdrop: 'static', ariaLabelledBy: 'modal-basic-title' });
  }

  openPostModal() {
    this.modalService.open(this.modal2, { backdrop: 'static', ariaLabelledBy: 'modal-basic-title' });
  }

  test(a) {
    this.log('test',  a);
    this.login(a);
  }

  private log(msg: string, obj: any): void {
    console.log('pecoolcats', msg, obj);
  }


}
