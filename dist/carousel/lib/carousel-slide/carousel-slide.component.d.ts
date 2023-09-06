import { ListKeyManagerOption } from '@angular/cdk/a11y';
import { OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MatCarouselSlide } from './carousel-slide';
import * as i0 from "@angular/core";
export declare class MatCarouselSlideComponent implements ListKeyManagerOption, MatCarouselSlide, OnInit {
    sanitizer: DomSanitizer;
    image: SafeStyle;
    overlayColor: string;
    hideOverlay: boolean;
    disabled: boolean;
    templateRef: TemplateRef<any>;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCarouselSlideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatCarouselSlideComponent, "mat-carousel-slide", never, { "image": "image"; "overlayColor": "overlayColor"; "hideOverlay": "hideOverlay"; "disabled": "disabled"; }, {}, never, ["*"], false, never>;
}
