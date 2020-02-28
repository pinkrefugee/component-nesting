import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greetString;
  @ContentChild('ct') el: ElementRef;
  constructor() { }

  ngOnChanges() {
    console.log('chchchchchanges');
  }

  ngAfterContentInit() {
    if (this.el) {
      this.el.nativeElement.textContent = 'Projected content changed';
    }
  }

  ngOnInit() {
    this.greetString = 'Hi';
  }

  ngDoCheck() {
    console.log('check');
  }

}
