import React from 'react';
import {HeaderStyled,HeaderText,LogoImage} from './HeaderStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo2.png'

const Header = () => {
  return (
    <HeaderStyled>
      <LogoImage src={logo} alt="flower"/>
      <HeaderText>SWEEP-Toxic Comments Classifications</HeaderText>
      <FontAwesomeIcon icon={faBars} size="2x" />  {/* Bars icon */}
    </HeaderStyled>
  );
};

export default Header;
