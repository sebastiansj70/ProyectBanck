import '@testing-library/jest-dom';
import { RenderResult, render } from '@testing-library/react';
import { AccountManagment } from './';
import React from 'react';

describe('My account', () => {
  let componenWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof AccountManagment>;

  beforeEach(() => {
    componentProps = {
      accountLists: {
        cedula: '123456789',
        nombres: 'Juan Sebastian',
        apellidos: 'Sanchez Parada',
        cuentas: [],
      },
      accountList: jest.fn(),
      saveAccount: jest.fn(),
      status:'ok'
    };

    componenWrapper = render(<AccountManagment {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componenWrapper.container).toMatchSnapshot();
  });

  it('contain my account', () => {
    const element = componenWrapper.container;
    const tittle = element.querySelectorAll('h2');

    expect(tittle[0].textContent).toMatch(/Cuentas/);
  });
});
