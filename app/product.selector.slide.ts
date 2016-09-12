import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'


@Component({
    selector: 'product-slide',
    template: `
        <div class="rl-wp-lndng-side" id="{{dishId}}">
            <div class="rl-wp-lndng-prodLeft">
            <div class="rl-wp-lndng-dish"><img class="{{dish}}" src="{{dish}}" alt="{{dishAlt}}" /></div>
            </div>
           <div class="rl-wp-lndng-prodRight">
           <div class="rl-wp-lndng-dish-title mobile" [innerHTML]="dishTitle"></div>
            <div class="rl-wp-lndng-dish-title" [innerHTML]="dishTitle"></div>
            <div class="rl-wp-lndng-dish-desc">{{dishDescription}}</div>
            <learn-more-button [analytics]="analytics" [link]="dishUrl" [text]="ctaText"></learn-more-button>
            </div>
          </div>
    `,
    directives: [LearnMoreButton]
})
export class ProductSlide {
    // This is where the animation code goes for each slide
    @Input() dish
    @Input() dishTitle
    @Input() dishDescription
    @Input() dishUrl
    @Input() dishId
    @Input() selected
    @Input() ctaText
    @Input() dishAlt
    @Input() analytics
}