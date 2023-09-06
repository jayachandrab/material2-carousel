import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
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
const _c0 = ["*"];
export class MatCarouselSlideComponent {
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
    } }, inputs: { image: "image", overlayColor: "overlayColor", hideOverlay: "hideOverlay", disabled: "disabled" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "carousel-slide"], [1, "carousel-slide-content"], ["class", "carousel-slide-overlay", 3, "background-color", 4, "ngIf"], [1, "carousel-slide-overlay"]], template: function MatCarouselSlideComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2Fyb3VzZWwvc3JjL2xpYi9jYXJvdXNlbC1zbGlkZS9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJvdXNlbC9zcmMvbGliL2Nhcm91c2VsLXNsaWRlL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7Ozs7O0lDSm5CLHlCQUlPOzs7SUFETCx1REFBdUM7OztJQUwzQyw4QkFBNkQsYUFBQTtJQUN2QixrQkFBeUI7SUFBQSxpQkFBTTtJQUNuRSx3RkFJTztJQUNULGlCQUFNOzs7SUFQc0IsZ0RBQWdDO0lBR3ZELGVBQWtCO0lBQWxCLDBDQUFrQjs7O0FEYXpCLE1BQU0sT0FBTyx5QkFBeUI7SUFTcEMsWUFBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQU4xQixpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsa0NBQWtDO0lBS3BFLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDOztxSEFoQlUseUJBQXlCOzJHQUF6Qix5QkFBeUI7dUJBT3pCLFdBQVc7Ozs7OztRQ3hCeEIsdUZBU2M7O3VGRFFELHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLG9CQUFvQjsrREFNZCxLQUFLO2tCQUFwQixLQUFLO1lBQ1UsWUFBWTtrQkFBM0IsS0FBSztZQUNVLFdBQVc7a0JBQTFCLEtBQUs7WUFDVSxRQUFRO2tCQUF2QixLQUFLO1lBRXlCLFdBQVc7a0JBQXpDLFNBQVM7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RLZXlNYW5hZ2VyT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWxTbGlkZSB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2Fyb3VzZWwtc2xpZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcm91c2VsU2xpZGVDb21wb25lbnRcbiAgaW1wbGVtZW50cyBMaXN0S2V5TWFuYWdlck9wdGlvbiwgTWF0Q2Fyb3VzZWxTbGlkZSwgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIGltYWdlOiBTYWZlU3R5bGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBvdmVybGF5Q29sb3IgPSAnIzAwMDAwMDQwJztcbiAgQElucHV0KCkgcHVibGljIGhpZGVPdmVybGF5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlOyAvLyBpbXBsZW1lbnRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uXG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKFwiJHt0aGlzLmltYWdlfVwiKWApO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtc2xpZGVcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJpbWFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1zbGlkZS1jb250ZW50XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwiIWhpZGVPdmVybGF5XCJcbiAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtc2xpZGUtb3ZlcmxheVwiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJvdmVybGF5Q29sb3JcIlxuICAgID48L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19