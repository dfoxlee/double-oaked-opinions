export interface FilterType {
   searchValue?: string;
   sort?: SortType;
   minPrice?: number;
   maxPrice?: number;
}

export interface SortType {
   field: string;
   dir: "asc" | "desc";
}
