import { PaginatorLabels, Paging } from '../interfaces/paging';

export const DefaultItemsPerPageOptions: number[] = [10, 20, 50, 100];

export const DefaultPaging: Paging = {
  pageSize: DefaultItemsPerPageOptions[1],
  totalPages: Math.ceil(150 / DefaultItemsPerPageOptions[1]),
  totalElements: 150,
  currentPage: 0,
};

export const DefaultLabels: PaginatorLabels = {
  itemsPerPage: 'Items per page',
  next: 'Next',
  previous: 'Previous',
  elementsXOutOfY: 'of',
};
