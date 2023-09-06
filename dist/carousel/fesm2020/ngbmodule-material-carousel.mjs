import * as i1$1 from '@angular/animations';
import { animate, style } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import * as i2 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { TemplateRef, Component, Input, ViewChild, EventEmitter, PLATFORM_ID, Inject, Output, ContentChildren, HostListener, Injectable, NgModule } from '@angular/core';
import { Subject, BehaviorSubject, interval } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import * as i1 from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

function MatCarouselSlideComponent_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-color", ctx_r1.overlayColor);
} }
function MatCarouselSlideComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MatCarouselSlideComponent_ng_template_0_div_3_Template, 1, 2, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", ctx_r0.image);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.hideOverlay);
} }
const _c0$1 = ["*"];
class MatCarouselSlideComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.overlayColor = '#00000040';
        this.hideOverlay = false;
        this.disabled = false; // implements ListKeyManagerOption
    }
    ngOnInit() {
        if (this.image) {
            this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
        }
    }
}
/** @nocollapse */ MatCarouselSlideComponent.ɵfac = function MatCarouselSlideComponent_Factory(t) { return new (t || MatCarouselSlideComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
/** @nocollapse */ MatCarouselSlideComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MatCarouselSlideComponent, selectors: [["mat-carousel-slide"]], viewQuery: function MatCarouselSlideComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { image: "image", overlayColor: "overlayColor", hideOverlay: "hideOverlay", disabled: "disabled" }, ngContentSelectors: _c0$1, decls: 1, vars: 0, consts: [[1, "carousel-slide"], [1, "carousel-slide-content"], ["class", "carousel-slide-overlay", 3, "background-color", 4, "ngIf"], [1, "carousel-slide-overlay"]], template: function MatCarouselSlideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, MatCarouselSlideComponent_ng_template_0_Template, 4, 3, "ng-template");
    } }, dependencies: [i2.NgIf], styles: [".carousel-slide[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:auto;background-size:cover;background-repeat:no-repeat;background-position:center}.carousel-slide-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:auto}.carousel-slide-content[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;z-index:1}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCarouselSlideComponent, [{
        type: Component,
        args: [{ selector: 'mat-carousel-slide', template: "<ng-template>\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\n    <div\n      *ngIf=\"!hideOverlay\"\n      class=\"carousel-slide-overlay\"\n      [style.background-color]=\"overlayColor\"\n    ></div>\n  </div>\n</ng-template>\n", styles: [".carousel-slide{width:100%;height:100%;position:absolute;z-index:auto;background-size:cover;background-repeat:no-repeat;background-position:center}.carousel-slide-overlay{width:100%;height:100%;position:absolute;z-index:auto}.carousel-slide-content{width:100%;height:100%;position:absolute;z-index:1}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { image: [{
            type: Input
        }], overlayColor: [{
            type: Input
        }], hideOverlay: [{
            type: Input
        }], disabled: [{
            type: Input
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();

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
class MatCarouselComponent {
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
/** @nocollapse */ MatCarouselComponent.ɵfac = function MatCarouselComponent_Factory(t) { return new (t || MatCarouselComponent)(i0.ɵɵdirectiveInject(i1$1.AnimationBuilder), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
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
    }], function () { return [{ type: i1$1.AnimationBuilder }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
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

// https://github.com/angular/angular/issues/10541#issuecomment-300761387
class MatCarouselHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
/** @nocollapse */ MatCarouselHammerConfig.ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMatCarouselHammerConfig_BaseFactory; return function MatCarouselHammerConfig_Factory(t) { return (ɵMatCarouselHammerConfig_BaseFactory || (ɵMatCarouselHammerConfig_BaseFactory = i0.ɵɵgetInheritedFactory(MatCarouselHammerConfig)))(t || MatCarouselHammerConfig); }; }();
/** @nocollapse */ MatCarouselHammerConfig.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: MatCarouselHammerConfig, factory: MatCarouselHammerConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCarouselHammerConfig, [{
        type: Injectable
    }], null, null); })();
class MatCarouselModule {
    static forRoot() {
        return {
            ngModule: MatCarouselModule,
            providers: [
                { provide: HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
            ]
        };
    }
}
/** @nocollapse */ MatCarouselModule.ɵfac = function MatCarouselModule_Factory(t) { return new (t || MatCarouselModule)(); };
/** @nocollapse */ MatCarouselModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MatCarouselModule });
/** @nocollapse */ MatCarouselModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [MatCarouselComponent, MatCarouselSlideComponent],
                imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
                exports: [MatCarouselComponent, MatCarouselSlideComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatCarouselModule, { declarations: [MatCarouselComponent, MatCarouselSlideComponent], imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule], exports: [MatCarouselComponent, MatCarouselSlideComponent] }); })();

/*
 * Public API Surface of mat-carousel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatCarouselComponent, MatCarouselHammerConfig, MatCarouselModule, MatCarouselSlideComponent };
//# sourceMappingURL=ngbmodule-material-carousel.mjs.map
