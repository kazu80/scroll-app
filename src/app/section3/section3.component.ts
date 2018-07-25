import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit, AfterViewInit {
    private _scrollVal: Number;
    private _el: HTMLElement;

    get scroll(): Number {
        return this._scrollVal;
    }

    @Input()
    set scroll(scroll: Number) {
        this._scrollVal = scroll;

        if (this._scrollVal > 600) {
            const target = this._el.querySelector('.wrapper');
            target.classList.add('opacity');
        }
    }

    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    ngOnInit() {}

    ngAfterViewInit() {}
}
