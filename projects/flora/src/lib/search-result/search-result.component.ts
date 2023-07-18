import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchResultLayout } from '../enums/search-result.enum';
import { OrderType } from '../interfaces/order';
import { PaginatorChangeEvent, PaginatorLabels, Paging } from '../interfaces/paging';
import { DefaultItemsPerPageOptions, DefaultLabels, DefaultPaging } from '../paginator/paginator-defaults';
import {
  DefaultNoResultsTitle,
  DefaultNoResultsDescription,
  DefaultNoResultsImage,
  DefaultNoResultsImagePadded,
  DefaultLayout,
} from './search-result-defaults';

@Component({
  selector: 'flora-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() orders: OrderType[] = [];
  @Input() noResultsTitle: string = DefaultNoResultsTitle;
  @Input() noResultsDescription: string = DefaultNoResultsDescription;
  @Input() noResultsImage: string = DefaultNoResultsImage;
  @Input() noResultsImagePadded: boolean = DefaultNoResultsImagePadded;
  @Input() fallbackPhoto: string;
  @Input() layout: SearchResultLayout = DefaultLayout;
  @Input() paginatorPaging: Paging = DefaultPaging;
  @Input() paginatorLabels: PaginatorLabels = DefaultLabels;
  @Input() paginatorResultsPerPageOptions: number[] = DefaultItemsPerPageOptions;

  @Output() pageChange = new EventEmitter();

  SearchResultLayout = SearchResultLayout;

  changePage(event: PaginatorChangeEvent): void {
    this.pageChange.emit({ paging: event.paging });
  }

  trackById(index, item: OrderType): number {
    return item.id;
  }
}
