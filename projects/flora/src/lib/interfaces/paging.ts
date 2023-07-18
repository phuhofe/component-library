export interface Paging {
  pageSize: number;
  totalPages: number;
  totalElements: number;
  currentPage: number;
}

export interface PaginatorLabels {
  itemsPerPage?: string;
  next?: string;
  previous?: string;
  elementsXOutOfY?: string;
  aria?: {
    itemsPerPage?: string;
    next?: string;
    previous?: string;
  };
}

export interface PaginatorChangeEvent {
  paging: Paging;
}
