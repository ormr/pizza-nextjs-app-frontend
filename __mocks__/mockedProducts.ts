import { Product } from '../types/Product.interface';

export const mockedProducts: Product[] = [
  {
    "id": "33a86e11-26be-4809-93d0-cf33aaf7cf11",
    "name": "Овощи и грибы 🌱",
    "ingredients": [
      {
        "name": "шампиньоны",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "томаты",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "сладкий перец",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "красный лук",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "маслины",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "кубики брынзы",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "моцарелла",
        "canBeRemoved": false,
        "isRemoved": false
      },
      {
        "name": "томатный соус",
        "canBeRemoved": false,
        "isRemoved": false
      },
      {
        "name": "итальянские травы",
        "canBeRemoved": true,
        "isRemoved": false
      }
    ],
    "sizes": [
      {
        "sizeId": "small",
        "sizeName": "Маленькая",
        "price": 395,
        "diameter": 25,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/69d38b6868e749369ae1427339236512_584x584.jpeg",
            "weight": 390,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "",
            "weight": 0,
            "isDisabled": true
          }
        ]
      },
      {
        "sizeId": "medium",
        "sizeName": "Средняя",
        "price": 625,
        "diameter": 30,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg",
            "weight": 540,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/63b64dec46084c328c3a36f82b420a81_584x584.jpeg",
            "weight": 460,
            "isDisabled": false
          }
        ]
      },
      {
        "sizeId": "big",
        "sizeName": "Большая",
        "price": 775,
        "diameter": 35,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg",
            "weight": 740,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/63b64dec46084c328c3a36f82b420a81_584x584.jpeg",
            "weight": 620,
            "isDisabled": false
          }
        ]
      }
    ],
    "topping": [
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Сырный бортик",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 169
          },
          {
            "sizeId": "medium",
            "price": 169
          },
          {
            "sizeId": "big",
            "price": 189
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Моцарелла",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый халапеньо",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Ветчина",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый цыпленок",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Томаты",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      }
    ],
    "description": "",
  },
  {
    "id": "77bda708-f895-4fad-b17e-8b463a50ade5",
    "name": "Овощи и грибы 🌱",
    "ingredients": [
      {
        "name": "шампиньоны",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "томаты",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "сладкий перец",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "красный лук",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "маслины",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "кубики брынзы",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "моцарелла",
        "canBeRemoved": false,
        "isRemoved": false
      },
      {
        "name": "томатный соус",
        "canBeRemoved": false,
        "isRemoved": false
      },
      {
        "name": "итальянские травы",
        "canBeRemoved": true,
        "isRemoved": false
      }
    ],
    "sizes": [
      {
        "sizeId": "small",
        "sizeName": "Маленькая",
        "price": 395,
        "diameter": 25,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/69d38b6868e749369ae1427339236512_584x584.jpeg",
            "weight": 390,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "",
            "weight": 0,
            "isDisabled": true
          }
        ]
      },
      {
        "sizeId": "medium",
        "sizeName": "Средняя",
        "price": 625,
        "diameter": 30,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg",
            "weight": 540,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/63b64dec46084c328c3a36f82b420a81_584x584.jpeg",
            "weight": 460,
            "isDisabled": false
          }
        ]
      },
      {
        "sizeId": "big",
        "sizeName": "Большая",
        "price": 775,
        "diameter": 35,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg",
            "weight": 740,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/63b64dec46084c328c3a36f82b420a81_584x584.jpeg",
            "weight": 620,
            "isDisabled": false
          }
        ]
      }
    ],
    "topping": [
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Сырный бортик",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 169
          },
          {
            "sizeId": "medium",
            "price": 169
          },
          {
            "sizeId": "big",
            "price": 189
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Моцарелла",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый халапеньо",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Ветчина",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый цыпленок",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Томаты",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      }
    ],
    "description": "",
  },
  {
    "id": "5e0821b0-f57b-4a55-9fee-7cf979b36482",
    "name": "Пепперони",
    "ingredients": [
      {
        "name": "пикантная пепперони",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "увеличенная порция моцареллы",
        "canBeRemoved": false,
        "isRemoved": false
      },
      {
        "name": "томатный соус",
        "canBeRemoved": false,
        "isRemoved": false
      }
    ],
    "sizes": [
      {
        "sizeId": "small",
        "sizeName": "Маленькая",
        "price": 345,
        "diameter": 25,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
            "weight": 420,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "",
            "weight": 0,
            "isDisabled": true
          }
        ]
      },
      {
        "sizeId": "medium",
        "sizeName": "Средняя",
        "price": 525,
        "diameter": 30,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/4e630ad6-e12e-4d52-ac4c-a7edb799c0fa.jpg",
            "weight": 620,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/e6d87c6f-e40b-42d6-83cc-5dc45391f678.jpg",
            "weight": 520,
            "isDisabled": false
          }
        ]
      },
      {
        "sizeId": "big",
        "sizeName": "Большая",
        "price": 695,
        "diameter": 35,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/523c10a1-464d-41ad-9d28-f414a009ae22.jpg",
            "weight": 820,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/284c2d7e-d635-41fa-b8a3-3fe6bc6e7399.jpg",
            "weight": 710,
            "isDisabled": false
          }
        ]
      }
    ],
    "topping": [
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Сырный бортик",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 169
          },
          {
            "sizeId": "medium",
            "price": 169
          },
          {
            "sizeId": "big",
            "price": 189
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый халапеньо",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Сыр блю чиз",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6A277BB50",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Шампиньоны",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый цыпленок",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Чеддер и пармезан",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      }
    ],
    "description": "",
  },
  {
    "id": "7b29bdaf-aa0e-424b-af61-20863e4a46ac",
    "name": "Маргарита",
    "ingredients": [
      {
        "name": "увеличенная порция моцареллы",
        "canBeRemoved": false,
        "isRemoved": false
      },
      {
        "name": "томаты",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "итальянские травы",
        "canBeRemoved": true,
        "isRemoved": false
      },
      {
        "name": "томатный соус",
        "canBeRemoved": false,
        "isRemoved": false
      }
    ],
    "sizes": [
      {
        "sizeId": "small",
        "sizeName": "Маленькая",
        "price": 345,
        "diameter": 25,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/69d38b6868e749369ae1427339236512_584x584.jpeg",
            "weight": 420,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "",
            "weight": 0,
            "isDisabled": true
          }
        ]
      },
      {
        "sizeId": "medium",
        "sizeName": "Средняя",
        "price": 525,
        "diameter": 30,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_584x584.jpeg",
            "weight": 620,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/80a1f29cb1f7432581778d466725e0bf_584x584.jpeg",
            "weight": 520,
            "isDisabled": false
          }
        ]
      },
      {
        "sizeId": "big",
        "sizeName": "Большая",
        "price": 695,
        "diameter": 35,
        "crustTypes": [
          {
            "crustTypeId": "default",
            "crustTypeName": "Традиционное",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/147c3814bbb34a77afdbc66e9ef20ed7_584x584.jpeg",
            "weight": 820,
            "isDisabled": false
          },
          {
            "crustTypeId": "thin",
            "crustTypeName": "Тонкое",
            "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Products/ab33bf72e7a644a0ae09584986ed3c1b_584x584.jpeg",
            "weight": 710,
            "isDisabled": false
          }
        ]
      }
    ],
    "topping": [
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Сырный бортик",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 169
          },
          {
            "sizeId": "medium",
            "price": 169
          },
          {
            "sizeId": "big",
            "price": 189
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острая чоризо",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый халапеньо",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
        "prices": [
          {
            "sizeId": "small",
            "price": 29
          },
          {
            "sizeId": "medium",
            "price": 39
          },
          {
            "sizeId": "big",
            "price": 49
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Брынза",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Острый цыпленок",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      },
      {
        "isDisabledFor": {
          "sizes": [

          ],
          "crustType": [

          ]
        },
        "name": "Чеддер и пармезан",
        "imageSrc": "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
        "prices": [
          {
            "sizeId": "small",
            "price": 49
          },
          {
            "sizeId": "medium",
            "price": 59
          },
          {
            "sizeId": "big",
            "price": 79
          }
        ]
      }
    ],
    "description": "",
  }
]