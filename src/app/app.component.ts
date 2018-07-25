import {Component, ElementRef, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    private _el: HTMLElement;

    scrollVal: Number;

    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    ngOnInit() {}

    ngAfterViewInit() {
        const sec1 = this._el.querySelector('#sec1');

        window.onscroll = (e) => {
            this.scrollVal = document.scrollingElement.scrollTop;

            if (this.scrollVal > 50) {
                sec1.classList.add('foo');
            }
        };

    }
}
