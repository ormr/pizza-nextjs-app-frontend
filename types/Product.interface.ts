export interface Product {
  id: string;
  name: string;
  ingredients: {
    name: string;
    canBeRemoved: boolean;
    isRemoved: boolean;
  }[];
  sizes: {
    sizeId: string;
    sizeName: string;
    price: number;
    diameter: number;
    crustTypes: {
      crustTypeId: string;
      crustTypeName: string;
      imageSrc: string;
      weight: number;
      isDisabled: boolean;
    }[];
  }[];
  topping: {
    name: string;
    imageSrc: string;
    prices: { sizeId: string; price: number; }[];
    isDisabledFor: {
      sizes: string[];
      crustType: string[];
    };
  }[]
  description?: string;
}