import { HammerGestureConfig } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.component";
import * as i2 from "./carousel-slide/carousel-slide.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/platform-browser";
export declare class MatCarouselHammerConfig extends HammerGestureConfig {
    overrides: {
        pinch: {
            enable: boolean;
        };
        rotate: {
            enable: boolean;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCarouselHammerConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatCarouselHammerConfig>;
}
export declare class MatCarouselModule {
    static forRoot(): ModuleWithProviders<MatCarouselModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCarouselModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatCarouselModule, [typeof i1.MatCarouselComponent, typeof i2.MatCarouselSlideComponent], [typeof i3.CommonModule, typeof i4.MatButtonModule, typeof i5.MatIconModule, typeof i6.HammerModule], [typeof i1.MatCarouselComponent, typeof i2.MatCarouselSlideComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatCarouselModule>;
}
