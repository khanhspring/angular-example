export interface Page<T> {
    page: number;
    per_page: number;
    data: T[];
  
    total: number;
    total_pages: number;
  }
  