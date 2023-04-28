import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should Debe de mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should Debe de mostrar a batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');

    const image = screen.getByRole('img');
    expect(image.src).toContain('/assets/heroes/dc-batman.jpg');

    const alertDanger = screen.getByLabelText('alert-danger');
    expect(alertDanger.style.display).toBe('none');
  });

  test('should Debe de mostrar un error si no se encuentra el heroe (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const alertPrimary = screen.getByLabelText('alert-primary');
    expect(alertPrimary.style.display).toBe('none');

    const alertDanger = screen.getByLabelText('alert-danger');
    expect(alertDanger.style.display).toBe('');
  });

  test('should Debe de llamar el navigate a la pantalla nueva', () => {
    const inputValue = 'superman';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
