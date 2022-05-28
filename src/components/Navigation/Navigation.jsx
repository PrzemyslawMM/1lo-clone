import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 38px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &:first-child {
    padding: 15px 15px;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ListItem = styled.li`
  display: none;
`;

const Menu = styled.span`
  margin-left: 10px;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <img src="https://unsplash.it/300/180" />
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
