export const setProductMockData = {
  id: '77bda708-f895-4fad-b17e-8b463a50ade5',
  name: 'Овощи и грибы 🌱',
  sizeId: 'medium',
  sizeName: 'Средняя',
  diameter: 30,
  price: 625,
  crustTypeId: 'default',
  crustTypeName: 'Традиционное',
  imageSrc:
    'https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg',
  weight: 540,
};

export const initialProductMockData = {
  ...setProductMockData,
  topping: [],
};

export const initialProductMockDataWithTopping = {
  ...setProductMockData,
  topping: [
    {
      name: 'Моцарелла',
      price: 79,
    },
  ]
}

export const changeProductSizeMockData = {
  sizeId: 'big',
  sizeName: 'Большая',
  imageSrc:
    'https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg',
  price: 775,
  diameter: 35,
  weight: 740,
  topping: [
    {
      name: 'Моцарелла',
      price: 79,
    },
  ],
};

export const changeCrustTypeMockData = {
  crustTypeId: 'thin',
  crustTypeName: 'Тонкое',
  weight: 460,
  imageSrc:
    'https://dodopizza-a.akamaihd.net/static/Img/Products/63b64dec46084c328c3a36f82b420a81_584x584.jpeg',
};

export const addToppingMockData = {
  name: 'Моцарелла',
  price: 79,
};