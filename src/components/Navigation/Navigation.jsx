import React from 'react';
import Image from 'next/image';
import {
  Image1,
  Image2,
  Image3,
  List,
  ListItem,
  Menu,
  PositionRelative,
  StyledNav,
  Wrapper,
} from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <PositionRelative>
        <Image3 src="https://www.1lo.pl/img/header/3.jpg" alt="" />
        <Image2 src="https://www.1lo.pl/img/header/2.jpg" alt="" />
        <Image1 src="https://www.1lo.pl/img/header/1.jpg" alt="" />
      </PositionRelative>
      <StyledNav>
        <List>
          <li>
            <Image
              src="https://www.1lo.pl/img/menu-trigger.png"
              alt="hamburger"
              width="23px"
              height="15px"
            />
            <Menu>Menu</Menu>
          </li>
          <ListItem>STRONA GŁÓWNA</ListItem>
          <ListItem>KONTAKT</ListItem>
          <ListItem>O SZKOLE</ListItem>
          <ListItem>DLA RODZICÓW</ListItem>
          <ListItem>DLA UCZNIÓW</ListItem>
          <ListItem>REKRUTACJA</ListItem>
          <ListItem>PATRONATY</ListItem>
          <ListItem>KONKURSY</ListItem>
          <ListItem>SUKCESY</ListItem>
          <ListItem>WYDARZENIA</ListItem>
          <ListItem>WYNIANY</ListItem>
          <ListItem>SAMORZĄD</ListItem>
          <ListItem>BIBLIOTEKA</ListItem>
          <ListItem>KOŁA ZAINTERESOWAŃ</ListItem>
          <ListItem>MAŁOPOLSKA CHMURA EDUKACYJNA</ListItem>
          <ListItem>HISTORIA</ListItem>
          <ListItem>100-LECIE</ListItem>
          <ListItem>TEATR</ListItem>
          <ListItem>DSD</ListItem>
          <ListItem>SPORT</ListItem>
        </List>
      </StyledNav>
    </Wrapper>
  );
};

export default Navigation;
