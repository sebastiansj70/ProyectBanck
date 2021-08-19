import '@testing-library/jest-dom';
import { RenderResult, render } from '@testing-library/react';
import { AccountDataManagment } from './';
import React from 'react';

describe('Data my account', () => {
  let componenWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof AccountDataManagment>;

  beforeEach(() => {
    componentProps = {
      accountLists: {
        cedula: '123456789',
        nombres: 'Juan Sebastian',
        apellidos: 'Sanchez Parada',
        cuentas: [],
      },
      account: {
        cuentaId: '111 111 111 111',
        tipoCuenta: 'Cuenta de ahorros',
        estado: 1,
        valorDisponible: 25000,
        movimientos: [],
      },
      status: 'ok',
      saveStatusLogin: jest.fn(),
    };

    componenWrapper = render(<AccountDataManagment {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componenWrapper.container).toMatchSnapshot();
  });

  it('contain information', () => {
    const element = componenWrapper.container;
    const tittle = element.querySelectorAll('h3');

    expect(tittle[0].textContent).toMatch(/Información/);
  });
});
