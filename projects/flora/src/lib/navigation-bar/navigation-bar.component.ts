import { AfterViewChecked, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flora-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.flora-navigation-bar]': 'true',
  },
})
export class NavigationBarComponent implements AfterViewChecked {
  @ViewChild('left')
  private leftContent: ElementRef;

  @ViewChild('center')
  private centerContent: ElementRef;

  @ViewChild('right')
  private rightContent: ElementRef;

  @Input() isSmallScreen: boolean;

  ngAfterViewChecked(): void {
    this.hideEmptyContent();
  }

  // We add/remove CSS classes to make the styling easier
  private hideEmptyContent(): void {
    if (this.leftContent) {
      if (this.leftContent.nativeElement.children.length === 0) {
        this.leftContent.nativeElement.classList.add('hidden');
        this.leftContent.nativeElement.parentElement.classList.add('no-left');
      } else {
        this.leftContent.nativeElement.classList.remove('hidden');
        this.leftContent.nativeElement.parentElement.classList.remove('no-left');
      }
    }

    if (this.centerContent && this.leftContent) {
      if (this.centerContent.nativeElement.children.length === 0) {
        this.centerContent.nativeElement.classList.add('hidden');
        this.centerContent.nativeElement.parentElement.classList.add('no-center');
      } else {
        this.centerContent.nativeElement.classList.remove('hidden');
        this.centerContent.nativeElement.parentElement.classList.remove('no-center');
      }
    }

    if (this.rightContent) {
      if (this.rightContent.nativeElement.children.length === 0) {
        this.rightContent.nativeElement.classList.add('hidden');
        this.rightContent.nativeElement.parentElement.classList.add('no-right');
      } else {
        this.rightContent.nativeElement.classList.remove('hidden');
        this.rightContent.nativeElement.parentElement.classList.remove('no-right');
      }
    }
  }
}
