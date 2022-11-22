import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, TemplateRef } from '@angular/core';

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
    private _rate: number = 0;
    @Input() set options($event: IRatingOptions) {
        if (!$event) {
            return;
        }
        this._options = $event;
    }
    @Input() set rate($event: number) {
        this._rate = $event;
        this._calculateStartIndexes();
    }
    @Input() public starTemplate!: TemplateRef<any>;
    @Output('onRate') private _onRateEvent: EventEmitter<number> = new EventEmitter<number>();
    public isHovering: boolean = false;
    public starItems: number[] = [];
    public activeStarIndex!: number;
    public halfStarIndex!: number;
    public starFillPercentage!: number;
    public hoveringStarIndex!: number;

    get options(): IRatingOptions {
        return this._options;
    }

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
        if (!this._options.hoverable) {
            return;
        }
        this.hoveringStarIndex = starIndex;
        this.isHovering = true;
    }

    public onMouseLeave(): void {
        if (!this._options.hoverable) {
            return;
        }
        this.hoveringStarIndex = -1;
        this.isHovering = false;
    }

    public onClickRating(rateIndex: number): void {
        if (!this._options.clickable) {
            return;
        }
        const rate: number = rateIndex + 1;
        this._onRateEvent.emit(rate);
    }

    private _calculateStartIndexes(): void {
        this.activeStarIndex = Math.floor(this._rate) - 1;
        this.halfStarIndex = Math.ceil(this._rate) - 1;
        this.starFillPercentage = (this._rate - Math.floor(this._rate)) * 100;
        if (this.starFillPercentage > 100) {
            this.starFillPercentage = 100;
        }
    }

}
