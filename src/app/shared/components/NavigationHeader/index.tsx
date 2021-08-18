import * as React from 'react';
import { HeaderNav } from './styles';
import { NavBrand } from './NavBrand';
import logo from 'assets/img/logo.png';

export const NavigationHeader: React.FC = () => {
  return (
    <HeaderNav>
      <NavBrand imgSrc={logo} text="Ceiba Software"></NavBrand>
    </HeaderNav>
  );
};
