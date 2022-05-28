import React from 'react';
import Image from 'next/image';
import {
  List,
  Logo,
  LogoWrapper,
  Patrons,
  StyledFooter,
  Table,
  Title,
} from './Footer.styles';

const Footer = () => (
  <>
    <Patrons>
      <Image
        src="https://unsplash.it/400/600"
        alt="test img"
        width="400px"
        height="600px"
      />
    </Patrons>
    <StyledFooter>
      <LogoWrapper>
        <Logo>
          <Image
            src="https://unsplash.it/140/130"
            width="140px"
            height="130px"
            alt="Logo"
          />
        </Logo>
        <div>
          <Image
            src="https://unsplash.it/45/48"
            width="45px"
            height="48px"
            alt="YouTube"
          />
          <Image
            src="https://unsplash.it/45/48"
            width="45px"
            height="48px"
            alt="Facebook"
          />
          <Image
            src="https://unsplash.it/45/48"
            width="45px"
            height="48px"
            alt="BIP"
          />
        </div>
      </LogoWrapper>
      <Table>
        <div>
          <Title>O SZKOLE</Title>
          <List>
            <li>Aktualności</li>
            <li>Historia</li>
            <li>100-lecie</li>
            <li>Teatr</li>
            <li>RODO</li>
            <li>Kontakt</li>
            <li>Deklaracja dostępności</li>
          </List>
        </div>
        <div>
          <Title>DLA RODZICÓW</Title>
          <List>
            <li>Skład Rady rodziców</li>
            <li>Regulamin</li>
            <li>Dni otwarte</li>
          </List>
        </div>
        <div>
          <Title>DLA UCZNIÓW</Title>
          <List>
            <li>Podręczniki</li>
            <li>Dzwonki</li>
            <li>Zajęcia pozalekcyjne</li>
            <li>Wzór zwolnienia</li>
            <li>Wzór zgody</li>
          </List>
        </div>
        <div>
          <Title>REKRUTACJA</Title>
          <List>
            <li>Oferta</li>
            <li>Regulamin rekrutacji</li>
            <li>Terminarz</li>
            <li>Punkty</li>
            <li>DSD II</li>
            <li>Akademia Umiejętności Staszic</li>
          </List>
        </div>
      </Table>
    </StyledFooter>
  </>
);

export default Footer;
