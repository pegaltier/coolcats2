import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() newPostEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  newPost() {
    this.newPostEvent.emit();
  }

  logout() {
    this.logoutEvent.emit();
  }

}
