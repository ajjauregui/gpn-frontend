import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class LandingPageComponent {
  img1 = '../../../assets/imgs/img1.jfif';
  img2 = '../../../assets/imgs/img2.jfif';
  img3 = '../../../assets/imgs/img3.jfif';
  img4 = '../../../assets/imgs/img4.jfif';

  images = [this.img1, this.img2, this.img3, this.img4];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
