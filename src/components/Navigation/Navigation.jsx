import React, { useState } from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import {
  List,
  ListItem,
  Menu,
  StyledNav,
  Wrapper,
  Hamburger,
  WrapperLinks,
  PatronsWrapper,
} from './Navigation.styles';
import Patrons from '../Patrons/Patrons';

const CarouselImage = styled.img`
  max-width: 1000px;
`;

const Navigation = () => {
  const [openState, setOpenState] = useState(false);
  return (
    <Wrapper>
      <Carousel
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={false}
        stopOnHover={false}
        autoPlay
        swipeable={false}
        dynamicHeight
        emulateTouch={false}
        autoFocus={false}
        infiniteLoop
        animationHandler="fade"
        transitionTime="3000"
        interval="6000"
      >
        <CarouselImage src="https://www.1lo.pl/img/header/1.jpg" alt="" />
        <CarouselImage src="https://www.1lo.pl/img/header/2.jpg" alt="" />
        <CarouselImage src="https://www.1lo.pl/img/header/3.jpg" alt="" />
      </Carousel>
      <WrapperLinks>
        <a
          href="/"
          title="1 Liceum Ogólnokształcące im. St. Staszica w Chrzanowie"
        >
          <img
            src="https://www.1lo.pl/img/najlepsze-licea-2022.png"
            alt="1 Liceum Ogólnokształcące im. St. Staszica w Chrzanowie"
          />
        </a>
        <a
          href="https://synergia.librus.pl/loguj"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.1lo.pl/img/ico_top/e-dziennik.png"
            alt="e-Dziennik"
          />
        </a>
        <a
          href="http://www.youtube.com/channel/UCIX-TiQsicz2UfBx1NItuVw"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.1lo.pl/img/ico_top/youtube.png"
            alt="You Tube"
          />
        </a>
        <a
          href="https://www.facebook.com/1lochrzanow"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://www.1lo.pl/img/ico_top/fb.png" alt="Facebook" />
        </a>
        <a
          href="http://bip.malopolska.pl/ilowchrzanowie2/Article/id,57795.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://www.1lo.pl/img/ico_top/bip.png" alt="BIP" />
        </a>
      </WrapperLinks>
      <StyledNav isOpen={openState}>
        <Hamburger onClick={() => setOpenState(!openState)}>
          <Image
            src="https://www.1lo.pl/img/menu-trigger.png"
            alt="hamburger"
            width="23px"
            height="15px"
          />
          <Menu>Menu</Menu>
        </Hamburger>
        <List isOpen={openState}>
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
          <ListItem>WYMIANY</ListItem>
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
      <PatronsWrapper>
        <Patrons />
      </PatronsWrapper>
    </Wrapper>
  );
};

export default Navigation;
