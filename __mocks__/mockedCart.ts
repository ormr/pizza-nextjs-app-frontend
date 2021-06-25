export const addCartProductMockData = {
  sizeName: 'Средняя',
  crustTypeName: 'Традиционное',
  price: 625,
  name: 'Овощи и грибы 🌱',
  diameter: 30,
  imageSrc:
    'https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg',
  topping: [],
};

export const initialCartMockData = {
  ...addCartProductMockData,
  id: '77bda708-f895-4fad-b17e-8b463a50ade5',
  count: 1,
};

export const updateProductCountMockData = {
  id: '9f8ec8a7-1d62-4b6b-81b6-513e676ea0d3',
  count: 2,
};

export const deleteProductMockData = {
  id: '9f8ec8a7-1d62-4b6b-81b6-513e676ea0d3',
};