export interface Market {
  title: string;
  iso: string;
  categories: Category[];
}

export interface Category {
  title: string,
  subCategories?: SubCategory[]
}

export interface SubCategory {
  title: string;
}
