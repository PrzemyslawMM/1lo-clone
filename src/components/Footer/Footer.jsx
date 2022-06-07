import React from 'react';
import {
  List,
  Logo,
  LogoWrapper,
  StyledFooter,
  Table,
  Title,
  WrapperPatrons,
} from './Footer.styles';
import Patrons from '../Patrons/Patrons';

const Footer = () => (
  <>
    <WrapperPatrons>
      <Patrons />
    </WrapperPatrons>
    <StyledFooter>
      <LogoWrapper>
        <Logo>
          <img
            src="https://www.1lo.pl/img/logo-footer.png"
            width="140px"
            height="130px"
            alt="Logo"
          />
        </Logo>
        <div>
          <img
            src="https://www.1lo.pl/img/ico_footer/youtube.png"
            width="45px"
            height="48px"
            alt="YouTube"
          />
          <img
            src="https://www.1lo.pl/img/ico_footer/fb.png"
            width="45px"
            height="48px"
            alt="Facebook"
          />
          <img
            src="https://www.1lo.pl/img/ico_footer/bip.png"
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
