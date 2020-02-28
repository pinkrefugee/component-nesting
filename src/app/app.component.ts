import { HomeComponent } from './home/home.component';
import { Component, ViewChild, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'component-nesting';
  @ViewChild(HomeComponent) hm: HomeComponent;
  @ViewChild('h') hm2: HomeComponent;
  @ViewChild('par') par: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.hm.greetString = 'Changed via ViewChild';
    this.hm2.greetString = 'Changed via ViewChild with templateref';
    this.par.nativeElement.textContent = 'DOM changed via ViewChild';
  }
}
