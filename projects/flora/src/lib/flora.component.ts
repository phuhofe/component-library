import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface FloraComponentOptions {
  icons: FloraComponentOptionsIcons;
}

interface FloraComponentOptionsIcons {
  keys: string[];
  matIconRegistry: MatIconRegistry;
  domSanitizer: DomSanitizer;
}

export const FLORA_COMPONENT_OPTIONS = new InjectionToken<FloraComponentOptions>('flora_component_options');

@Component({
  selector: 'flora-main',
  template: '',
})
export class FloraComponent implements OnInit {
  constructor(@Inject(FLORA_COMPONENT_OPTIONS) protected options: FloraComponentOptions) {
    if (options?.icons) {
      this.loadIcons({ icons: options.icons });
    }
  }

  ngOnInit(): void {}

  protected loadIcons(options: { icons: FloraComponentOptionsIcons; iconsPath?: string }): void {
    if (!options.iconsPath) {
      options.iconsPath = '/assets/images/flora/icons';
    }

    options.icons.keys.forEach((icon) => {
      this.options.icons.matIconRegistry.addSvgIcon(
        icon,
        this.options.icons.domSanitizer.bypassSecurityTrustResourceUrl(`${options.iconsPath}/${icon}.svg`)
      );
    });
  }
}
