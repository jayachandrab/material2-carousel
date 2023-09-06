import { animate, style } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import { Component, ContentChildren, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { interval, BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
const _c0 = ["carouselContainer"];
const _c1 = ["carouselList"];
function MatCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7, 8);
    i0.ɵɵlistener("panleft", function MatCarouselComponent_li_4_Template_li_panleft_0_listener($event) { i0.ɵɵrestoreView(_r9); const _r7 = i0.ɵɵreference(1); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onPan($event, _r7)); })("panright", function MatCarouselComponent_li_4_Template_li_panright_0_listener($event) { i0.ɵɵrestoreView(_r9); const _r7 = i0.ɵɵreference(1); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onPan($event, _r7)); })("panend", function MatCarouselComponent_li_4_Template_li_panend_0_listener($event) { i0.ɵɵrestoreView(_r9); const _r7 = i0.ɵɵreference(1); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onPanEnd($event, _r7)); })("pancancel", function MatCarouselComponent_li_4_Template_li_pancancel_0_listener($event) { i0.ɵɵrestoreView(_r9); const _r7 = i0.ɵɵreference(1); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onPanEnd($event, _r7)); });
    i0.ɵɵelementContainer(2, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("padding-bottom", ctx_r2.maintainAspectRatio && ctx_r2.proportion ? ctx_r2.proportion + "%" : "0px")("height", !ctx_r2.maintainAspectRatio && ctx_r2.slideHeight ? ctx_r2.slideHeight : "0px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", slide_r6.templateRef);
} }
function MatCarouselComponent_button_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("svgIcon", ctx_r13.svgIconOverrides.arrowBack);
} }
function MatCarouselComponent_button_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_back");
    i0.ɵɵelementEnd();
} }
function MatCarouselComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function MatCarouselComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.previous()); });
    i0.ɵɵtemplate(1, MatCarouselComponent_button_5_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    i0.ɵɵtemplate(2, MatCarouselComponent_button_5_ng_template_2_Template, 2, 0, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r3.color)("disabled", !ctx_r3.loop && ctx_r3.currentIndex == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.svgIconOverrides == null ? null : ctx_r3.svgIconOverrides.arrowBack)("ngIfElse", _r14);
} }
function MatCarouselComponent_button_6_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("svgIcon", ctx_r18.svgIconOverrides.arrowForward);
} }
function MatCarouselComponent_button_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_forward");
    i0.ɵɵelementEnd();
} }
function MatCarouselComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function MatCarouselComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.next()); });
    i0.ɵɵtemplate(1, MatCarouselComponent_button_6_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    i0.ɵɵtemplate(2, MatCarouselComponent_button_6_ng_template_2_Template, 2, 0, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r19 = i0.ɵɵreference(3);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r4.color)("disabled", !ctx_r4.loop && ctx_r4.currentIndex == ctx_r4.slidesList.length - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.svgIconOverrides == null ? null : ctx_r4.svgIconOverrides.arrowForward)("ngIfElse", _r19);
} }
function MatCarouselComponent_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function MatCarouselComponent_div_7_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r27); const i_r25 = restoredCtx.index; const ctx_r26 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r26.slideTo(i_r25)); })("focus", function MatCarouselComponent_div_7_button_1_Template_button_focus_0_listener() { i0.ɵɵrestoreView(_r27); i0.ɵɵnextContext(2); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(_r0.focus()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r23.color)("disabled", i_r25 == ctx_r23.currentIndex);
} }
function MatCarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, MatCarouselComponent_div_7_button_1_Template, 1, 2, "button", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("flex-direction", ctx_r5.orientation === "rtl" ? "row-reverse" : "row");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.slidesList);
} }
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Index"] = 2] = "Index";
})(Direction || (Direction = {}));
export class MatCarouselComponent {
    set autoplay(value) {
        this.autoplay$.next(value);
        this._autoplay = value;
    }
    set interval(value) {
        this.interval$.next(value);
    }
    get loop() {
        return this._loop;
    }
    set loop(value) {
        this.loop$.next(value);
        this._loop = value;
    }
    get maxWidth() {
        return this._maxWidth;
    }
    set maxWidth(value) {
        this._maxWidth = value;
        this.maxWidth$.next();
    }
    set slides(value) {
        this.slides$.next(value);
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        this.orientation$.next(value);
        this._orientation = value;
    }
    get currentIndex() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItemIndex;
        }
        return 0;
    }
    get currentSlide() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItem;
        }
        return null;
    }
    constructor(animationBuilder, renderer, platformId) {
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.platformId = platformId;
        this.timings = '250ms ease-in';
        this.hideArrows = true;
        this.hideIndicators = true;
        this.pauseOnHover = true;
        this.color = 'accent';
        this.maintainAspectRatio = true;
        this.proportion = 25;
        this.slideHeight = '100%';
        this.useKeyboard = false;
        this.useMouseWheel = false;
        this.animationStart = new EventEmitter();
        this.change = new EventEmitter();
        this._autoplay = true;
        this.autoplay$ = new Subject();
        this.interval$ = new BehaviorSubject(5000);
        this.slides$ = new BehaviorSubject(null);
        this._maxWidth = 'auto';
        this.maxWidth$ = new Subject();
        this._loop = true;
        this.loop$ = new Subject();
        this._orientation = 'ltr';
        this.orientation$ = new Subject();
        this.timerStop$ = new Subject();
        this.destroy$ = new Subject();
        this.playing = false;
    }
    ngAfterContentInit() {
        this.listKeyManager = new ListKeyManager(this.slidesList)
            .withVerticalOrientation(false)
            .withHorizontalOrientation(this._orientation)
            .withWrap(this._loop);
        this.listKeyManager.updateActiveItem(0);
        this.listKeyManager.change
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.playAnimation());
    }
    ngAfterViewInit() {
        this.autoplay$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.startTimer(value);
        });
        this.interval$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.resetTimer(value);
            this.startTimer(this._autoplay);
        });
        this.maxWidth$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.slideTo(0));
        this.loop$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.listKeyManager.withWrap(value));
        this.orientation$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.listKeyManager.withHorizontalOrientation(value));
        this.slides$
            .pipe(takeUntil(this.destroy$), filter(value => value && value < this.slidesList.length))
            .subscribe(value => this.resetSlides(value));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    next() {
        this.goto(Direction.Right);
    }
    previous() {
        this.goto(Direction.Left);
    }
    slideTo(index) {
        this.goto(Direction.Index, index);
    }
    onKeyUp(event) {
        if (this.useKeyboard && !this.playing) {
            this.listKeyManager.onKeydown(event);
        }
    }
    onMouseEnter() {
        if (this.pauseOnHover) {
            this.stopTimer();
        }
    }
    onMouseLeave() {
        if (this.pauseOnHover) {
            this.startTimer(this._autoplay);
        }
    }
    onMouseWheel(event) {
        if (this.useMouseWheel) {
            event.preventDefault(); // prevent window to scroll
            const Δ = Math.sign(event.deltaY);
            if (Δ > 0) {
                this.next();
            }
            else if (Δ < 0) {
                this.previous();
            }
        }
    }
    onResize(event) {
        // Reset carousel when window is resized
        // in order to avoid major glitches.
        this.slideTo(0);
    }
    onPan(event, slideElem) {
        // https://github.com/angular/angular/issues/10541#issuecomment-346539242
        // if y velocity is greater, it's a panup/pandown, so ignore.
        if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
            return;
        }
        let Δx = event.deltaX;
        if (this.isOutOfBounds()) {
            Δx *= 0.2; // decelerate movement;
        }
        this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
        this.renderer.setStyle(this.carouselList.nativeElement, 'transform', this.getTranslation(this.getOffset() + Δx));
    }
    onPanEnd(event, slideElem) {
        this.renderer.removeStyle(slideElem, 'cursor');
        if (!this.isOutOfBounds() &&
            Math.abs(event.deltaX) > this.getWidth() * 0.25) {
            if (event.deltaX <= 0) {
                this.next();
                return;
            }
            this.previous();
            return;
        }
        this.playAnimation(); // slide back, don't change current index
    }
    isOutOfBounds() {
        const sign = this.orientation === 'rtl' ? -1 : 1;
        const left = sign *
            (this.carouselList.nativeElement.getBoundingClientRect().left -
                this.carouselList.nativeElement.offsetParent.getBoundingClientRect()
                    .left);
        const lastIndex = this.slidesList.length - 1;
        const width = -this.getWidth() * lastIndex;
        return ((this.listKeyManager.activeItemIndex === 0 && left >= 0) ||
            (this.listKeyManager.activeItemIndex === lastIndex && left <= width));
    }
    isVisible() {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }
        const elem = this.carouselContainer.nativeElement;
        const docViewTop = window.pageYOffset;
        const docViewBottom = docViewTop + window.innerHeight;
        const elemOffset = elem.getBoundingClientRect();
        const elemTop = docViewTop + elemOffset.top;
        const elemBottom = elemTop + elemOffset.height;
        return elemBottom <= docViewBottom || elemTop >= docViewTop;
    }
    getOffset() {
        const offset = this.listKeyManager.activeItemIndex * this.getWidth();
        const sign = this.orientation === 'rtl' ? 1 : -1;
        return sign * offset;
    }
    getTranslation(offset) {
        return `translateX(${offset}px)`;
    }
    getWidth() {
        return this.carouselContainer.nativeElement.clientWidth;
    }
    goto(direction, index) {
        if (!this.playing) {
            const rtl = this.orientation === 'rtl';
            switch (direction) {
                case Direction.Left:
                    return rtl
                        ? this.listKeyManager.setNextItemActive()
                        : this.listKeyManager.setPreviousItemActive();
                case Direction.Right:
                    return rtl
                        ? this.listKeyManager.setPreviousItemActive()
                        : this.listKeyManager.setNextItemActive();
                case Direction.Index:
                    return this.listKeyManager.setActiveItem(index);
            }
        }
    }
    playAnimation() {
        const translation = this.getTranslation(this.getOffset());
        const factory = this.animationBuilder.build(animate(this.timings, style({ transform: translation })));
        const animation = factory.create(this.carouselList.nativeElement);
        animation.onStart(() => {
            this.playing = true;
            this.animationStart.emit(this.currentIndex);
        });
        animation.onDone(() => {
            this.change.emit(this.currentIndex);
            this.playing = false;
            this.renderer.setStyle(this.carouselList.nativeElement, 'transform', translation);
            animation.destroy();
        });
        animation.play();
    }
    resetSlides(slides) {
        this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
    }
    resetTimer(value) {
        this.timer$ = interval(value);
    }
    startTimer(autoplay) {
        if (!autoplay) {
            return;
        }
        this.timer$
            .pipe(takeUntil(this.timerStop$), takeUntil(this.destroy$), filter(() => this.isVisible()))
            .subscribe(() => {
            this.listKeyManager.withWrap(true).setNextItemActive();
            this.listKeyManager.withWrap(this.loop);
        });
    }
    stopTimer() {
        this.timerStop$.next();
    }
}
/** @nocollapse */ MatCarouselComponent.ɵfac = function MatCarouselComponent_Factory(t) { return new (t || MatCarouselComponent)(i0.ɵɵdirectiveInject(i1.AnimationBuilder), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
/** @nocollapse */ MatCarouselComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MatCarouselComponent, selectors: [["mat-carousel"]], contentQueries: function MatCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, MatCarouselSlideComponent, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slidesList = _t);
    } }, viewQuery: function MatCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carouselContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carouselList = _t.first);
    } }, hostBindings: function MatCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keyup", function MatCarouselComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); })("mouseenter", function MatCarouselComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MatCarouselComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousewheel", function MatCarouselComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); })("resize", function MatCarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { timings: "timings", svgIconOverrides: "svgIconOverrides", autoplay: "autoplay", interval: "interval", loop: "loop", hideArrows: "hideArrows", hideIndicators: "hideIndicators", pauseOnHover: "pauseOnHover", color: "color", maxWidth: "maxWidth", maintainAspectRatio: "maintainAspectRatio", proportion: "proportion", slideHeight: "slideHeight", slides: "slides", useKeyboard: "useKeyboard", useMouseWheel: "useMouseWheel", orientation: "orientation" }, outputs: { animationStart: "animationStart", change: "change" }, decls: 8, vars: 12, consts: [["tabindex", "0", 1, "carousel"], ["carouselContainer", ""], ["role", "listbox", 1, "carousel-list"], ["carouselList", ""], ["class", "carousel-slide", "role", "option", 3, "padding-bottom", "height", "panleft", "panright", "panend", "pancancel", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click", 4, "ngIf"], ["class", "carousel-indicators", "tabindex", "-1", 3, "flex-direction", 4, "ngIf"], ["role", "option", 1, "carousel-slide", 3, "panleft", "panright", "panend", "pancancel"], ["carouselSlide", ""], [3, "ngTemplateOutlet"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click"], [3, "svgIcon", 4, "ngIf", "ngIfElse"], ["defaultArrowBack", ""], [3, "svgIcon"], ["defaultArrowForward", ""], ["tabindex", "-1", 1, "carousel-indicators"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus", 4, "ngFor", "ngForOf"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus"]], template: function MatCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1)(2, "ul", 2, 3);
        i0.ɵɵtemplate(4, MatCarouselComponent_li_4_Template, 3, 5, "li", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, MatCarouselComponent_button_5_Template, 4, 4, "button", 5);
        i0.ɵɵtemplate(6, MatCarouselComponent_button_6_Template, 4, 4, "button", 5);
        i0.ɵɵtemplate(7, MatCarouselComponent_div_7_Template, 2, 3, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("max-width", ctx.maxWidth)("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("flex-direction", ctx.orientation === "rtl" ? "row-reverse" : "row")("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.slidesList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideArrows);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideArrows);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideIndicators);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.MatIconButton, i3.MatMiniFabButton, i4.MatIcon], styles: [".carousel[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden;outline:none}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;z-index:1;top:50%;transform:translateY(-50%)}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-of-type{left:30px}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{right:30px}.carousel-list[_ngcontent-%COMP%]{width:100%;margin:0;padding:0;list-style:none;display:flex;position:relative}.carousel-slide[_ngcontent-%COMP%]{width:100%;height:0;display:flex;flex-shrink:0;position:relative}.carousel-slide[_ngcontent-%COMP%]:hover{cursor:grab}.carousel-indicators[_ngcontent-%COMP%]{display:flex;position:absolute;bottom:15px;z-index:1;left:50%;transform:translate(-50%);outline:none}.carousel-indicators[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:10px;height:10px;margin:7.5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCarouselComponent, [{
        type: Component,
        args: [{ selector: 'mat-carousel', template: "<div\n  #carouselContainer\n  class=\"carousel\"\n  tabindex=\"0\"\n  [style.max-width]=\"maxWidth\"\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n>\n  <ul\n    #carouselList\n    class=\"carousel-list\"\n    role=\"listbox\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n  >\n    <li\n      #carouselSlide\n      *ngFor=\"let slide of slidesList\"\n      class=\"carousel-slide\"\n      role=\"option\"\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\n      (panleft)=\"onPan($event, carouselSlide)\"\n      (panright)=\"onPan($event, carouselSlide)\"\n      (panend)=\"onPanEnd($event, carouselSlide)\"\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\n    >\n      <ng-container [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\n    </li>\n  </ul>\n\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == 0\"\n    (click)=\"previous()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\n    ></mat-icon>\n    <ng-template #defaultArrowBack>\n      <mat-icon>arrow_back</mat-icon>\n    </ng-template>\n  </button>\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\n    (click)=\"next()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\n    ></mat-icon>\n    <ng-template #defaultArrowForward>\n      <mat-icon>arrow_forward</mat-icon>\n    </ng-template>\n  </button>\n\n  <div\n    *ngIf=\"!hideIndicators\"\n    class=\"carousel-indicators\"\n    tabindex=\"-1\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n  >\n    <button\n      *ngFor=\"let slide of slidesList; let i = index\"\n      type=\"button\"\n      tabindex=\"-1\"\n      mat-mini-fab\n      [color]=\"color\"\n      [disabled]=\"i == currentIndex\"\n      (click)=\"slideTo(i)\"\n      (focus)=\"carouselContainer.focus()\"\n    ></button>\n  </div>\n</div>\n", styles: [".carousel{width:100%;position:relative;overflow:hidden;outline:none}.carousel>button{position:absolute;z-index:1;top:50%;transform:translateY(-50%)}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{width:100%;margin:0;padding:0;list-style:none;display:flex;position:relative}.carousel-slide{width:100%;height:0;display:flex;flex-shrink:0;position:relative}.carousel-slide:hover{cursor:grab}.carousel-indicators{display:flex;position:absolute;bottom:15px;z-index:1;left:50%;transform:translate(-50%);outline:none}.carousel-indicators>button{width:10px;height:10px;margin:7.5px}\n"] }]
    }], function () { return [{ type: i1.AnimationBuilder }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { timings: [{
            type: Input
        }], svgIconOverrides: [{
            type: Input
        }], autoplay: [{
            type: Input
        }], interval: [{
            type: Input
        }], loop: [{
            type: Input
        }], hideArrows: [{
            type: Input
        }], hideIndicators: [{
            type: Input
        }], pauseOnHover: [{
            type: Input
        }], color: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], maintainAspectRatio: [{
            type: Input
        }], proportion: [{
            type: Input
        }], slideHeight: [{
            type: Input
        }], slides: [{
            type: Input
        }], useKeyboard: [{
            type: Input
        }], useMouseWheel: [{
            type: Input
        }], orientation: [{
            type: Input
        }], animationStart: [{
            type: Output
        }], change: [{
            type: Output
        }], slidesList: [{
            type: ContentChildren,
            args: [MatCarouselSlideComponent]
        }], carouselContainer: [{
            type: ViewChild,
            args: ['carouselContainer']
        }], carouselList: [{
            type: ViewChild,
            args: ['carouselList']
        }], onKeyUp: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseWheel: [{
            type: HostListener,
            args: ['mousewheel', ['$event']]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY2Fyb3VzZWwvc3JjL2xpYi9jYXJvdXNlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJvdXNlbC9zcmMvbGliL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBR0wsU0FBUyxFQUNULGVBQWUsRUFFZixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFHWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7Ozs7Ozs7SUNYbEYsZ0NBV0M7SUFKQyxxTUFBVyxlQUFBLHlCQUE0QixDQUFBLElBQUMsMkxBQzVCLGVBQUEsMEJBQTRCLENBQUEsSUFEQSx1TEFFOUIsZUFBQSw2QkFBK0IsQ0FBQSxJQUZELDZMQUczQixlQUFBLDZCQUErQixDQUFBLElBSEo7SUFLeEMsMkJBQW9FO0lBQ3RFLGlCQUFLOzs7O0lBUkgsbUhBQW9GLDBGQUFBO0lBT3RFLGVBQXNDO0lBQXRDLHVEQUFzQzs7O0lBYXRELCtCQUdZOzs7SUFEViw0REFBc0M7OztJQUd0QyxnQ0FBVTtJQUFB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LCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMaXN0S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBpbnRlcnZhbCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWwsIE9yaWVudGF0aW9uLCBTdmdJY29uT3ZlcnJpZGVzIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1zbGlkZS9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQnO1xuXG5lbnVtIERpcmVjdGlvbiB7XG4gIExlZnQsXG4gIFJpZ2h0LFxuICBJbmRleFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcm91c2VsQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgTWF0Q2Fyb3VzZWwsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0aW1pbmdzID0gJzI1MG1zIGVhc2UtaW4nO1xuICBASW5wdXQoKSBwdWJsaWMgc3ZnSWNvbk92ZXJyaWRlczogU3ZnSWNvbk92ZXJyaWRlcztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGF1dG9wbGF5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5hdXRvcGxheSQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5fYXV0b3BsYXkgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaW50ZXJ2YWwkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBsb29wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb29wO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubG9vcCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgcHVibGljIGhpZGVBcnJvd3MgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZUluZGljYXRvcnMgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgcGF1c2VPbkhvdmVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAnYWNjZW50JztcblxuICBwdWJsaWMgZ2V0IG1heFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21heFdpZHRoO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbWF4V2lkdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heFdpZHRoID0gdmFsdWU7XG4gICAgdGhpcy5tYXhXaWR0aCQubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW8gPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgcHJvcG9ydGlvbiA9IDI1O1xuICBASW5wdXQoKSBwdWJsaWMgc2xpZGVIZWlnaHQgPSAnMTAwJSc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzbGlkZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVzJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VLZXlib2FyZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgdXNlTW91c2VXaGVlbCA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgb3JpZW50YXRpb24oKTogT3JpZW50YXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9vcmllbnRhdGlvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG9yaWVudGF0aW9uKHZhbHVlOiBPcmllbnRhdGlvbikge1xuICAgIHRoaXMub3JpZW50YXRpb24kLm5leHQodmFsdWUpO1xuICAgIHRoaXMuX29yaWVudGF0aW9uID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIGFuaW1hdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHB1YmxpYyBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMubGlzdEtleU1hbmFnZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTbGlkZSgpOiBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50IHtcbiAgICBpZiAodGhpcy5saXN0S2V5TWFuYWdlcikge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudCkgcHVibGljIHNsaWRlc0xpc3Q6IFF1ZXJ5TGlzdDxcbiAgICBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XG4gID47XG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsQ29udGFpbmVyJykgcHJpdmF0ZSBjYXJvdXNlbENvbnRhaW5lcjogRWxlbWVudFJlZjxcbiAgICBIVE1MRGl2RWxlbWVudFxuICA+O1xuICBAVmlld0NoaWxkKCdjYXJvdXNlbExpc3QnKSBwcml2YXRlIGNhcm91c2VsTGlzdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIHB1YmxpYyBsaXN0S2V5TWFuYWdlcjogTGlzdEtleU1hbmFnZXI8TWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBfYXV0b3BsYXkgPSB0cnVlO1xuICBwcml2YXRlIGF1dG9wbGF5JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBpbnRlcnZhbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oNTAwMCk7XG4gIHByaXZhdGUgc2xpZGVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPihudWxsKTtcblxuICBwcml2YXRlIF9tYXhXaWR0aCA9ICdhdXRvJztcbiAgcHJpdmF0ZSBtYXhXaWR0aCQgPSBuZXcgU3ViamVjdDxuZXZlcj4oKTtcblxuICBwcml2YXRlIF9sb29wID0gdHJ1ZTtcbiAgcHJpdmF0ZSBsb29wJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246IE9yaWVudGF0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgb3JpZW50YXRpb24kID0gbmV3IFN1YmplY3Q8T3JpZW50YXRpb24+KCk7XG5cbiAgcHJpdmF0ZSB0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSB0aW1lclN0b3AkID0gbmV3IFN1YmplY3Q8bmV2ZXI+KCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PG5ldmVyPigpO1xuICBwcml2YXRlIHBsYXlpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZFxuICApIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyID0gbmV3IExpc3RLZXlNYW5hZ2VyKHRoaXMuc2xpZGVzTGlzdClcbiAgICAgIC53aXRoVmVydGljYWxPcmllbnRhdGlvbihmYWxzZSlcbiAgICAgIC53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuX29yaWVudGF0aW9uKVxuICAgICAgLndpdGhXcmFwKHRoaXMuX2xvb3ApO1xuXG4gICAgdGhpcy5saXN0S2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKDApO1xuICAgIHRoaXMubGlzdEtleU1hbmFnZXIuY2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucGxheUFuaW1hdGlvbigpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRvcGxheSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW50ZXJ2YWwkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgIHRoaXMucmVzZXRUaW1lcih2YWx1ZSk7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy5fYXV0b3BsYXkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYXhXaWR0aCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zbGlkZVRvKDApKTtcblxuICAgIHRoaXMubG9vcCRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5saXN0S2V5TWFuYWdlci53aXRoV3JhcCh2YWx1ZSkpO1xuXG4gICAgdGhpcy5vcmllbnRhdGlvbiRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5saXN0S2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHZhbHVlKSk7XG5cbiAgICB0aGlzLnNsaWRlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAmJiB2YWx1ZSA8IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMucmVzZXRTbGlkZXModmFsdWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwdWJsaWMgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG8oRGlyZWN0aW9uLlJpZ2h0KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG8oRGlyZWN0aW9uLkxlZnQpO1xuICB9XG5cbiAgcHVibGljIHNsaWRlVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ290byhEaXJlY3Rpb24uSW5kZXgsIGluZGV4KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VLZXlib2FyZCAmJiAhdGhpcy5wbGF5aW5nKSB7XG4gICAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgaWYodGhpcy5wYXVzZU9uSG92ZXIpe1xuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgcHVibGljIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZih0aGlzLnBhdXNlT25Ib3Zlcil7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy5fYXV0b3BsYXkpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Nb3VzZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlTW91c2VXaGVlbCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCB3aW5kb3cgdG8gc2Nyb2xsXG4gICAgICBjb25zdCDOlCA9IE1hdGguc2lnbihldmVudC5kZWx0YVkpO1xuXG4gICAgICBpZiAozpQgPiAwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICjOlCA8IDApIHtcbiAgICAgICAgdGhpcy5wcmV2aW91cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gUmVzZXQgY2Fyb3VzZWwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIG1ham9yIGdsaXRjaGVzLlxuICAgIHRoaXMuc2xpZGVUbygwKTtcbiAgfVxuXG4gIHB1YmxpYyBvblBhbihldmVudDogYW55LCBzbGlkZUVsZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA1NDEjaXNzdWVjb21tZW50LTM0NjUzOTI0MlxuICAgIC8vIGlmIHkgdmVsb2NpdHkgaXMgZ3JlYXRlciwgaXQncyBhIHBhbnVwL3BhbmRvd24sIHNvIGlnbm9yZS5cbiAgICBpZiAoTWF0aC5hYnMoZXZlbnQudmVsb2NpdHlZKSA+IE1hdGguYWJzKGV2ZW50LnZlbG9jaXR5WCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IM6UeCA9IGV2ZW50LmRlbHRhWDtcbiAgICBpZiAodGhpcy5pc091dE9mQm91bmRzKCkpIHtcbiAgICAgIM6UeCAqPSAwLjI7IC8vIGRlY2VsZXJhdGUgbW92ZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzbGlkZUVsZW0sICdjdXJzb3InLCAnZ3JhYmJpbmcnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudCxcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbih0aGlzLmdldE9mZnNldCgpICsgzpR4KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25QYW5FbmQoZXZlbnQ6IGFueSwgc2xpZGVFbGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoc2xpZGVFbGVtLCAnY3Vyc29yJyk7XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5pc091dE9mQm91bmRzKCkgJiZcbiAgICAgIE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPiB0aGlzLmdldFdpZHRoKCkgKiAwLjI1XG4gICAgKSB7XG4gICAgICBpZiAoZXZlbnQuZGVsdGFYIDw9IDApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmlvdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wbGF5QW5pbWF0aW9uKCk7IC8vIHNsaWRlIGJhY2ssIGRvbid0IGNoYW5nZSBjdXJyZW50IGluZGV4XG4gIH1cblxuICBwcml2YXRlIGlzT3V0T2ZCb3VuZHMoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMub3JpZW50YXRpb24gPT09ICdydGwnID8gLTEgOiAxO1xuICAgIGNvbnN0IGxlZnQgPVxuICAgICAgc2lnbiAqXG4gICAgICAodGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cbiAgICAgICAgdGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAubGVmdCk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zbGlkZXNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3Qgd2lkdGggPSAtdGhpcy5nZXRXaWR0aCgpICogbGFzdEluZGV4O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCA9PT0gMCAmJiBsZWZ0ID49IDApIHx8XG4gICAgICAodGhpcy5saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggPT09IGxhc3RJbmRleCAmJiBsZWZ0IDw9IHdpZHRoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtID0gdGhpcy5jYXJvdXNlbENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGRvY1ZpZXdUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3QgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbVRvcCA9IGRvY1ZpZXdUb3AgKyBlbGVtT2Zmc2V0LnRvcDtcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW1PZmZzZXQuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSB8fCBlbGVtVG9wID49IGRvY1ZpZXdUb3A7XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldCgpOiBudW1iZXIge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ICogdGhpcy5nZXRXaWR0aCgpO1xuICAgIGNvbnN0IHNpZ24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAncnRsJyA/IDEgOiAtMTtcbiAgICByZXR1cm4gc2lnbiAqIG9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHJhbnNsYXRpb24ob2Zmc2V0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhcm91c2VsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBwcml2YXRlIGdvdG8oZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXlpbmcpIHtcbiAgICAgIGNvbnN0IHJ0bCA9IHRoaXMub3JpZW50YXRpb24gPT09ICdydGwnO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5MZWZ0OlxuICAgICAgICAgIHJldHVybiBydGxcbiAgICAgICAgICAgID8gdGhpcy5saXN0S2V5TWFuYWdlci5zZXROZXh0SXRlbUFjdGl2ZSgpXG4gICAgICAgICAgICA6IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLlJpZ2h0OlxuICAgICAgICAgIHJldHVybiBydGxcbiAgICAgICAgICAgID8gdGhpcy5saXN0S2V5TWFuYWdlci5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKVxuICAgICAgICAgICAgOiB0aGlzLmxpc3RLZXlNYW5hZ2VyLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLkluZGV4OlxuICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RLZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGxheUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5nZXRPZmZzZXQoKSk7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlci5idWlsZChcbiAgICAgIGFuaW1hdGUodGhpcy50aW1pbmdzLCBzdHlsZSh7IHRyYW5zZm9ybTogdHJhbnNsYXRpb24gfSkpXG4gICAgKTtcbiAgICBjb25zdCBhbmltYXRpb24gPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmNhcm91c2VsTGlzdC5uYXRpdmVFbGVtZW50KTtcblxuICAgIGFuaW1hdGlvbi5vblN0YXJ0KCgpID0+IHtcbiAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQodGhpcy5jdXJyZW50SW5kZXgpO1xuICB9KTtcbiAgICBhbmltYXRpb24ub25Eb25lKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jdXJyZW50SW5kZXgpO1xuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmNhcm91c2VsTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgdHJhbnNsYXRpb25cbiAgICAgICk7XG4gICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0U2xpZGVzKHNsaWRlczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZXNMaXN0LnJlc2V0KHRoaXMuc2xpZGVzTGlzdC50b0FycmF5KCkuc2xpY2UoMCwgc2xpZGVzKSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0VGltZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudGltZXIkID0gaW50ZXJ2YWwodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFRpbWVyKGF1dG9wbGF5OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFhdXRvcGxheSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGltZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudGltZXJTdG9wJCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaXNWaXNpYmxlKCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5saXN0S2V5TWFuYWdlci53aXRoV3JhcCh0cnVlKS5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyLndpdGhXcmFwKHRoaXMubG9vcCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIHRoaXMudGltZXJTdG9wJC5uZXh0KCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgI2Nhcm91c2VsQ29udGFpbmVyXG4gIGNsYXNzPVwiY2Fyb3VzZWxcIlxuICB0YWJpbmRleD1cIjBcIlxuICBbc3R5bGUubWF4LXdpZHRoXT1cIm1heFdpZHRoXCJcbiAgW3N0eWxlLmhlaWdodF09XCIhbWFpbnRhaW5Bc3BlY3RSYXRpbyA/ICcxMDAlJyA6ICdhdXRvJ1wiXG4+XG4gIDx1bFxuICAgICNjYXJvdXNlbExpc3RcbiAgICBjbGFzcz1cImNhcm91c2VsLWxpc3RcIlxuICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICBbc3R5bGUuZmxleC1kaXJlY3Rpb25dPVwib3JpZW50YXRpb24gPT09ICdydGwnID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnXCJcbiAgICBbc3R5bGUuaGVpZ2h0XT1cIiFtYWludGFpbkFzcGVjdFJhdGlvID8gJzEwMCUnIDogJ2F1dG8nXCJcbiAgPlxuICAgIDxsaVxuICAgICAgI2Nhcm91c2VsU2xpZGVcbiAgICAgICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBzbGlkZXNMaXN0XCJcbiAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtc2xpZGVcIlxuICAgICAgcm9sZT1cIm9wdGlvblwiXG4gICAgICBbc3R5bGUucGFkZGluZy1ib3R0b21dPVwibWFpbnRhaW5Bc3BlY3RSYXRpbyAmJiBwcm9wb3J0aW9uID8gcHJvcG9ydGlvbiArICclJzogJzBweCdcIlxuICAgICAgW3N0eWxlLmhlaWdodF09XCIhbWFpbnRhaW5Bc3BlY3RSYXRpbyAmJiBzbGlkZUhlaWdodCA/IHNsaWRlSGVpZ2h0IDogJzBweCdcIlxuICAgICAgKHBhbmxlZnQpPVwib25QYW4oJGV2ZW50LCBjYXJvdXNlbFNsaWRlKVwiXG4gICAgICAocGFucmlnaHQpPVwib25QYW4oJGV2ZW50LCBjYXJvdXNlbFNsaWRlKVwiXG4gICAgICAocGFuZW5kKT1cIm9uUGFuRW5kKCRldmVudCwgY2Fyb3VzZWxTbGlkZSlcIlxuICAgICAgKHBhbmNhbmNlbCk9XCJvblBhbkVuZCgkZXZlbnQsIGNhcm91c2VsU2xpZGUpXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsaWRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9saT5cbiAgPC91bD5cblxuICA8YnV0dG9uXG4gICAgKm5nSWY9XCIhaGlkZUFycm93c1wiXG4gICAgbWF0LWljb24tYnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICBbZGlzYWJsZWRdPVwiIWxvb3AgJiYgY3VycmVudEluZGV4ID09IDBcIlxuICAgIChjbGljayk9XCJwcmV2aW91cygpXCJcbiAgPlxuICAgIDxtYXQtaWNvblxuICAgICAgKm5nSWY9XCJzdmdJY29uT3ZlcnJpZGVzPy5hcnJvd0JhY2s7IGVsc2U6IGRlZmF1bHRBcnJvd0JhY2tcIlxuICAgICAgW3N2Z0ljb25dPVwic3ZnSWNvbk92ZXJyaWRlcy5hcnJvd0JhY2tcIlxuICAgID48L21hdC1pY29uPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEFycm93QmFjaz5cbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgICpuZ0lmPVwiIWhpZGVBcnJvd3NcIlxuICAgIG1hdC1pY29uLWJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIHRhYmluZGV4PVwiLTFcIlxuICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgW2Rpc2FibGVkXT1cIiFsb29wICYmIGN1cnJlbnRJbmRleCA9PSBzbGlkZXNMaXN0Lmxlbmd0aCAtIDFcIlxuICAgIChjbGljayk9XCJuZXh0KClcIlxuICA+XG4gICAgPG1hdC1pY29uXG4gICAgICAqbmdJZj1cInN2Z0ljb25PdmVycmlkZXM/LmFycm93Rm9yd2FyZDsgZWxzZTogZGVmYXVsdEFycm93Rm9yd2FyZFwiXG4gICAgICBbc3ZnSWNvbl09XCJzdmdJY29uT3ZlcnJpZGVzLmFycm93Rm9yd2FyZFwiXG4gICAgPjwvbWF0LWljb24+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0QXJyb3dGb3J3YXJkPlxuICAgICAgPG1hdC1pY29uPmFycm93X2ZvcndhcmQ8L21hdC1pY29uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvYnV0dG9uPlxuXG4gIDxkaXZcbiAgICAqbmdJZj1cIiFoaWRlSW5kaWNhdG9yc1wiXG4gICAgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCJcbiAgICB0YWJpbmRleD1cIi0xXCJcbiAgICBbc3R5bGUuZmxleC1kaXJlY3Rpb25dPVwib3JpZW50YXRpb24gPT09ICdydGwnID8gJ3Jvdy1yZXZlcnNlJyA6ICdyb3cnXCJcbiAgPlxuICAgIDxidXR0b25cbiAgICAgICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBzbGlkZXNMaXN0OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICBtYXQtbWluaS1mYWJcbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICBbZGlzYWJsZWRdPVwiaSA9PSBjdXJyZW50SW5kZXhcIlxuICAgICAgKGNsaWNrKT1cInNsaWRlVG8oaSlcIlxuICAgICAgKGZvY3VzKT1cImNhcm91c2VsQ29udGFpbmVyLmZvY3VzKClcIlxuICAgID48L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==