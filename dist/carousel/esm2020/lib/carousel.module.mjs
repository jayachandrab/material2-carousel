import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselComponent } from './carousel.component';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import * as i0 from "@angular/core";
// https://github.com/angular/angular/issues/10541#issuecomment-300761387
export class MatCarouselHammerConfig extends HammerGestureConfig {
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
export class MatCarouselModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY2Fyb3VzZWwvc3JjL2xpYi9jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsWUFBWSxFQUNiLE1BQU0sMkJBQTJCLENBQUM7O0FBR25DLHlFQUF5RTtBQUV6RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsbUJBQW1CO0lBRGhFOztRQUVFLGNBQVMsR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUMxQixDQUFDO0tBQ0g7OzBTQUxZLHVCQUF1QixTQUF2Qix1QkFBdUI7NEdBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVOztBQVlYLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO2FBQ3RFO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3FHQVJVLGlCQUFpQjtrR0FBakIsaUJBQWlCO3NHQUhsQixZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZO3VGQUd6RCxpQkFBaUI7Y0FMN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLHlCQUF5QixDQUFDO2dCQUMvRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQ3JFLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLHlCQUF5QixDQUFDO2FBQzNEOzt3RkFDWSxpQkFBaUIsbUJBSmIsb0JBQW9CLEVBQUUseUJBQXlCLGFBQ3BELFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksYUFDMUQsb0JBQW9CLEVBQUUseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBNYXRDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdENhcm91c2VsU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLXNsaWRlL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBIYW1tZXJHZXN0dXJlQ29uZmlnLFxuICBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gIEhhbW1lck1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA1NDEjaXNzdWVjb21tZW50LTMwMDc2MTM4N1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdENhcm91c2VsSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IHtcbiAgICBwaW5jaDogeyBlbmFibGU6IGZhbHNlIH0sXG4gICAgcm90YXRlOiB7IGVuYWJsZTogZmFsc2UgfVxuICB9O1xufVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWF0Q2Fyb3VzZWxDb21wb25lbnQsIE1hdENhcm91c2VsU2xpZGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIEhhbW1lck1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRDYXJvdXNlbENvbXBvbmVudCwgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1hdENhcm91c2VsTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXRDYXJvdXNlbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IE1hdENhcm91c2VsSGFtbWVyQ29uZmlnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=