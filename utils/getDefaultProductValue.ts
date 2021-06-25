import { Product } from '../types/Product.interface';

export interface GetDefaultProductValue {
  id: string;
  name: string;
  sizeId: string;
  sizeName: string;
  diameter: number;
  price: number;
  crustTypeId: string;
  crustTypeName: string;
  imageSrc: string;
  weight: number;
}

export const getDefaultProductValue = (
  product: Product,
  size: string = 'medium',
  crustType: string = 'default'
) => {

  size = !size ? 'medium' : size;
  crustType = !crustType ? 'default' : crustType;

  const {
    sizeId,
    sizeName,
    diameter,
    price,
    crustTypes
  } = product.sizes.find((sizeItem) => sizeItem.sizeId === size);

  const {
    crustTypeId,
    crustTypeName,
    imageSrc,
    weight
  } = crustTypes.find((crustTypeItem) => crustTypeItem.crustTypeId === crustType);

  return {
    id: product.id,
    name: product.name,
    sizeId,
    sizeName,
    diameter,
    price,
    crustTypeId,
    crustTypeName,
    imageSrc,
    weight,
  };
};