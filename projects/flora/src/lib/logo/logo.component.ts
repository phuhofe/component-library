import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flora-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() imageSource: string;
  @Input() imageAltText = '';
  @Input() height?: string;

  constructor() {}

  ngOnInit(): void {}
}
