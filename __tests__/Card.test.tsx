import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card/Card';

const props = {
  title: 'Овощи и грибы 🌱',
  buttonText: 'Выбрать',
  description: undefined,
  id: '33a86e11-26be-4809-93d0-cf33aaf7cf11',
  imageSrc:
    'https://dodopizza-a.akamaihd.net/static/Img/Products/7a73802dc5204349b0d6231f9f5733df_584x584.jpeg',
  ingredients: [
    'шампиньоны',
    'томаты',
    'сладкий перец',
    'красный лук',
    'маслины',
    'кубики брынзы',
    'моцарелла',
    'томатный соус',
    'итальянские травы',
  ],
  price: 395,
};

const setUp = (props) => render(<Card {...props} />);

const strIngredients = props.ingredients.join(', ');
const cardBody = props.ingredients
  ? strIngredients.charAt(0).toUpperCase() + strIngredients.slice(1)
  : props.description;

describe('<Card />', () => {
  it('render component', () => {
    setUp(props);
    expect(screen.getByAltText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(cardBody)).toBeInTheDocument();
    expect(screen.getByText(`от ${props.price} ₽`)).toBeInTheDocument();
    expect(screen.getByText(props.buttonText)).toBeInTheDocument();
  });
});
