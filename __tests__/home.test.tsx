import { screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { mockedProducts } from '../__mocks__/mockedProducts';
import { handlers, PRODUCTS_API_URL } from '../test-utils/server-handlers';
import { server, rest } from '../test-utils/server';
import userEvent from '@testing-library/user-event';

describe('<HomePage />', () => {
  it('displays list of products', async () => {
    server.use(
      rest.get(PRODUCTS_API_URL, async (_req, res, ctx) =>
        res(ctx.json(mockedProducts))
      )
    );

    const { render } = await getPage({ route: '/' });

    render();

    await waitFor(() => {
      screen.debug();
      expect(
        screen.getByText('Что-то пошло не так. Попробуйте позже')
      ).toBeInTheDocument();
    });
  });

  it('shows the error message when receive an error from the API', async () => {
    server.use(
      rest.get(PRODUCTS_API_URL, async (_req, res, ctx) => res(ctx.status(404)))
    );

    const { render } = await getPage({ route: '/' });

    render();

    await waitFor(() => {
      screen.debug();
      expect(
        screen.getByText('Что-то пошло не так. Попробуйте позже')
      ).toBeInTheDocument();
    });
  });
});

/*

for (const { name, ingredients, description } of mockedProducts) {
        const headings = screen.getAllByRole('heading', { level: 3, name });
        for (const heading of headings) {
          expect(heading).toBeInTheDocument();
        }

        const strIngredients = ingredients.map(({ name }) => name).join(', ');
        const cardBody = ingredients
          ? strIngredients.charAt(0).toUpperCase() + strIngredients.slice(1)
          : description;
        const cardBodies = screen.getAllByText(cardBody);
        for (const cardBodyItem of cardBodies) {
          expect(cardBodyItem).toBeInTheDocument();
        }
      }*/
