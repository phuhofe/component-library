import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { FooterLink } from '../interfaces/footer';

@Component({
  selector: 'flora-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  @Input() logo: string;
  @Input() description: string;
  @Input() descriptionLink: FooterLink;
  @Input() copyright: string;
  @Input() menuHeading: string;
  @Input() menu: FooterLink[] = [];

  constructor() {}

  ngOnInit(): void {}

  trackById(index, item): void {
    return item.id;
  }
}
