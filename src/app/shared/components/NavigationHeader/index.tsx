import * as React from 'react';
import { HeaderNav } from './styles';
import logo from 'assets/img/logo.png';
import { NavBrand } from './NavBrand';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Home', url: '/home' },
    { label: 'Productos', url: '/productos' },
  ];
  return (
    <HeaderNav>
      <NavBrand imgSrc={logo} text="Ceiba Software"></NavBrand>
    </HeaderNav>
  );
};
