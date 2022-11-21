import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { DEFAULT_RATING_OPTIONS } from './constants';
import { IRatingOptions } from './models';

@Component({
    selector: 'app-rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit {
    private _options: IRatingOptions;
    private _fillPercentage: number = 50;
    @Input() set options($event: IRatingOptions) {
        if ($event) {
            return;
        }
        this._options = $event;
    }
    @Input() set fillPercentage($event: number) {
        this._fillPercentage = $event;
    }
    public isHovering: boolean = false;
    public starItems: number[] = [];
    public activeStarIndex!: number;
    public halfStarIndex!: number;
    public startFillPercentage!: number;

    constructor() {
        this._options = DEFAULT_RATING_OPTIONS;
    }

    ngOnInit(): void {
        this._setStarItems();
    }

    private _setStarItems(): void {
        const { starsCount } = this._options;
        this.starItems = Array.from(Array(starsCount));
        this._calculateStartIndexes();
    }

    public onStarHover(starIndex: number): void {
        this.activeStarIndex = starIndex;
        this.isHovering = true;
    }

    public onMouseLeave(): void {
        this._calculateStartIndexes();
        this.isHovering = false;
    }

    public onClickRating(rate: number): void {
        console.log(rate, 'rate');
    }

    private _calculateStartIndexes(): void {
        this.activeStarIndex = (Math.floor(this._options.starsCount * this._fillPercentage / 100)) - 1;
        this.halfStarIndex = (Math.ceil(this._options.starsCount * this._fillPercentage / 100)) - 1;
        this.startFillPercentage = (this._fillPercentage - ((this.activeStarIndex + 1) * (100 / this._options.starsCount))) * this._options.starsCount;
    }

}
