"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RatingComponent = void 0;
var core_1 = require("@angular/core");
var constants_1 = require("./constants");
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.fillPercentage = 50;
        this.starItems = [];
        this._options = constants_1.DEFAULT_RATING_OPTIONS;
    }
    RatingComponent.prototype.ngOnInit = function () {
        this._setStarItems();
    };
    RatingComponent.prototype._setStarItems = function () {
        var starsCount = this._options.starsCount;
        this.starItems = Array.from(Array(starsCount));
    };
    RatingComponent.prototype.onStarHover = function (starIndex) {
        this.activeStarIndex = starIndex;
    };
    RatingComponent.prototype.onMouseLeave = function () {
        this.activeStarIndex = 1;
    };
    __decorate([
        core_1.Input('options')
    ], RatingComponent.prototype, "_options");
    __decorate([
        core_1.Input()
    ], RatingComponent.prototype, "fillPercentage");
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'app-rating',
            templateUrl: 'rating.component.html',
            styleUrls: ['rating.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
