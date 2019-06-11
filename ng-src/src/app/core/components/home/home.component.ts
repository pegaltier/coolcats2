import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modal', { static: true })
  modal: ElementRef;
  logged: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    // test
    this.logged = true;
  }

  postMessage(): void {
    this.modalService.dismissAll();
  }
  
  open() {
    this.modalService.open(this.modal, { ariaLabelledBy: 'modal-basic-title' });
  }


}
