import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { PaginatorLabels, Paging } from '../interfaces/paging';
import { DefaultPaging, DefaultItemsPerPageOptions, DefaultLabels } from './paginator-defaults';

@Component({
  selector: 'flora-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None, // Because we need to deal with mat-form-field margins and paddings
  host: {
    '[class.flora-paginator]': 'true',
  },
})
export class PaginatorComponent implements OnInit {
  @Input() paging: Paging = DefaultPaging;
  @Input() itemsPerPageOptions: number[] = DefaultItemsPerPageOptions;
  @Input() labels: PaginatorLabels = DefaultLabels;
  @Input() displayPagingInformation = true;
  @Input() displayPagingInformationRange = false;

  @Output() pageChange = new EventEmitter();

  previousPageIsAvailable: boolean = this.pageNumberIsValid(this.paging.currentPage - 1);
  nextPageIsAvailable: boolean = this.pageNumberIsValid(this.paging.currentPage + 1);

  constructor() {}

  ngOnInit(): void {
    this.updatePagingInfo();
  }

  nextPage(): void {
    this.changePage(this.paging.currentPage + 1);
  }

  previousPage(): void {
    this.changePage(this.paging.currentPage - 1);
  }

  changePage(goToPageNumber: number): void {
    if (this.pageNumberIsValid(goToPageNumber)) {
      this.paging = {
        ...this.paging,
        currentPage: goToPageNumber,
      };

      this.updatePagingInfo();
    }
  }

  changePageSize(event): void {
    const oldfirstItem = this.paging.pageSize * this.paging.currentPage + 1;
    const newPageSize = +event.value;
    const newFirstItem = Math.floor(oldfirstItem / newPageSize) * newPageSize;
    const newPageNumber = Math.floor(newFirstItem / newPageSize);

    this.paging = {
      ...this.paging,
      currentPage: newPageNumber,
      pageSize: newPageSize,
    };

    this.updatePagingInfo();

    if (!this.pageNumberIsValid(newPageNumber)) {
      this.paging = {
        ...this.paging,
        currentPage: 0,
      };
      this.updatePagingInfo();
    }
  }

  private pageNumberIsValid(pageNumber: number): boolean {
    return pageNumber < this.paging.totalPages && pageNumber >= 0;
  }

  private updatePagingInfo(): void {
    this.paging = {
      ...this.paging,
      totalPages: Math.ceil(this.paging.totalElements / this.paging.pageSize),
    };

    this.previousPageIsAvailable = this.pageNumberIsValid(this.paging.currentPage - 1);
    this.nextPageIsAvailable = this.pageNumberIsValid(this.paging.currentPage + 1);

    this.pageChange.emit({
      paging: this.paging,
    });
  }
}
