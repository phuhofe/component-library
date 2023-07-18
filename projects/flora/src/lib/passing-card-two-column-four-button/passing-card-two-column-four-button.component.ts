import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { OrderServiceName } from '../enums/order-service';
import { FloraComponent } from '../flora.component';
import { OrderType } from '../interfaces/order';

export const DefaultLoadingPhoto =
  'https://img.adstate.com/f7xK_3i0JRlcigEu8vom-AFFElOrRRys1BEY8XTFaUM/rs:fill:64:64:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvb3RoZXIvbG9hZGluZy1zcGlubmVyLnN2Zz9TcHJHU3pydTJXOWpOLmtWcjUwRmliQVk1MUZfQUQuSA.svg';
export const DefaultFallbackPhoto =
  'https://img.adstate.com/U8JvYtZQXVCnbLorKljf_Nshi-lPVWm0LJnlKKuFAsM/rs:fill:128:128:1/czM6Ly9qYXZhLWh1dC1pbWdwcm94eS9mbG9yYS1yZXNvdXJjZXMvb3RoZXIvZGVmYXVsdC1wcm9maWxlLnN2Zz9uN1BYUzBsbFJlZ3dHaW1EWnB2d3d1eXZSM3J3VlBObQ.svg';

@Component({
  selector: 'flora-passing-card-two-column-four-button',
  templateUrl: './passing-card-two-column-four-button.component.html',
  styleUrls: ['./passing-card-two-column-four-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PassingCardTwoColumnFourButtonComponent extends FloraComponent implements OnInit, OnChanges {
  @Input() order: any;
  @Input() loadingPhoto: string = DefaultLoadingPhoto;
  @Input() fallbackPhoto: string = DefaultFallbackPhoto;

  @Output() orderPersonPhotoLoad = new EventEmitter();
  @Output() orderPersonPhotoError = new EventEmitter();

  @ViewChild('orderPersonPhoto', { static: false }) orderPersonPhoto: ElementRef<HTMLImageElement>;

  imageIsLoading = true;
  defaultFallbackPhoto = DefaultFallbackPhoto;
  hyphenCharacter = '-';

  constructor(protected matIconRegistry: MatIconRegistry, protected domSanitizer: DomSanitizer) {
    super({
      icons: {
        keys: ['deathNotice', 'flowerShop', 'memorialPage', 'donation', 'material/place', 'material/schedule'],
        matIconRegistry,
        domSanitizer,
      },
    });
  }

  ngOnInit(): void {
    this.setupOrderPersonPhoto();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.order) {
      this.setupOrderPersonPhoto();

      this.order = {
        ...this.order,
        services: this.setupOrderServices(this.order.services),
      };
    }

    if (changes.fallbackPhoto) {
      this.fallbackPhoto = changes.fallbackPhoto.currentValue ?? DefaultFallbackPhoto;
    }

    if (changes.loadingPhoto) {
      this.loadingPhoto = changes.loadingPhoto.currentValue ?? DefaultLoadingPhoto;
    }
  }

  getFullName(orderPerson: OrderType['person']): string {
    return orderPerson?.firstName + ' ' + orderPerson?.lastName;
  }

  getCeremony(orderCeremony: OrderType['ceremony']): string {
    return (
      (orderCeremony?.location ? `, ${orderCeremony?.location}` : '') + (orderCeremony?.dateTime ? `, ${orderCeremony?.dateTime}` : '')
    );
  }

  getA11YLabel(order: OrderType): string {
    if (!order?.person) {
      return;
    }

    const label = `${this.getFullName(order?.person)}`;

    if (!order?.ceremony && !order?.person?.birthdate && !order?.person?.deathdate) {
      return label;
    }

    if (order?.person?.birthdate && order?.person?.deathdate) {
      return (
        label +
        (order?.ceremony ? this.getCeremony(order?.ceremony) : '') +
        `, from: ${order?.person?.birthdate} to: ${order?.person?.deathdate}`
      );
    }

    if (order?.ceremony || order?.person?.deathdate || order?.person?.birthdate) {
      return (
        label +
        (order?.ceremony ? this.getCeremony(order?.ceremony) : '') +
        (order?.person?.birthdate ? `, ${order?.person?.birthdate}` : '') +
        (order?.person?.deathdate ? `, ${order?.person?.deathdate}` : '')
      );
    }

    return label;
  }

  // Loops through the services and sets default values if none have been submitted
  setupOrderServices(services: any): any {
    return Object.entries(services)
      .map(([key, value]: any) => {
        return {
          [key]: {
            label: value.label ?? OrderServiceName[key],
            disabled: !!value.disabled,
            url: value.disabled ? null : value.url,
          },
        };
      })
      .reduce((result, item) => {
        const key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
      }, {});
  }

  // Tries to load the submitted photo. Fire load event if successful, fire error event if failure.
  setupOrderPersonPhoto(): void {
    this.imageIsLoading = true;
    const orderPersonPhotoImage = new Image();
    orderPersonPhotoImage.src = this.order?.person?.photoUrl;

    orderPersonPhotoImage.addEventListener('load', (event) => {
      this.orderPersonPhoto?.nativeElement?.setAttribute('src', orderPersonPhotoImage.src);
      this.imageIsLoading = false;
      this.orderPersonPhotoLoad.emit(event);
    });

    orderPersonPhotoImage.addEventListener('error', (event) => {
      this.setFallbackPhoto();
      this.imageIsLoading = false;
      this.orderPersonPhotoError.emit(event);
    });
  }

  private setFallbackPhoto(): void {
    this.orderPersonPhoto?.nativeElement?.setAttribute('src', this.fallbackPhoto);
  }
}
