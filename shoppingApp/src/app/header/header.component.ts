import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isIn= false;   // store state
  inMenu = false;
  constructor() { }
  ngOnInit() {
  }
  toggleState() { // click handler
    this.isIn = !this.isIn;
  }
  menuDrop() {
    this.inMenu = !this.inMenu;
  }

}
