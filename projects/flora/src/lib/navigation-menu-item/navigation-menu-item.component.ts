import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flora-navigation-menu-item',
  templateUrl: './navigation-menu-item.component.html',
  styleUrls: ['./navigation-menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.flora-navigation-menu-item]': 'true',
  },
})
export class NavigationMenuItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
