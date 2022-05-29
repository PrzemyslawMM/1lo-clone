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
      <a href="https://www.agh.edu.pl/" target="_blank" rel="noreferrer">
        <Image
          src="https://www.1lo.pl/img/recommended/agh.jpg"
          alt="Link do Akademii górniczo hutniczej"
          width="80px"
          height="80px"
        />
      </a>
      <a
        href="https://www.kuratorium.krakow.pl/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://www.1lo.pl/img/recommended/kuratorium.jpg"
          alt="Link do Kuratorium Oświaty w Krakowie"
          width="80px"
          height="80px"
        />
      </a>
      <a
        href="https://www.facebook.com/su.1lo.staszic/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://www.1lo.pl/img/recommended/samorzad-uczniowski-1lo.jpg"
          alt="Link do Facebooka szkolnego"
          width="80px"
          height="80px"
        />
      </a>
      <a
        href="https://www.facebook.com/nadpoziomy2.0/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://www.1lo.pl/img/recommended/nad-poziomy_2_0.png"
          alt="Link do Facebooka gazetki szkolnej"
          width="130px"
          height="80px"
        />
      </a>
      <a
        href="https://www.facebook.com/biblioteka1lochrzanow/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://www.1lo.pl/img/recommended/biblioteka.png"
          alt="Link do Facebooka biblioteki"
          width="80px"
          height="80px"
        />
      </a>
      <a href="https://academica.edu.pl" target="_blank" rel="noreferrer">
        <Image
          src="https://www.1lo.pl/img/recommended/academica.png"
          alt="Link do Cyfrowej wypożyczalnii międzybibliotecznej książek i czasopism naukowych"
          width="120px"
          height="80px"
        />
      </a>
      <a href="http://staszic.org" target="_blank" rel="noreferrer">
        <Image
          src="https://www.1lo.pl/img/recommended/sps.png"
          alt="Link do Stowarzyszenia Przyjaciela Staszica"
          width="120px"
          height="80px"
        />
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" target="_blank" rel="noreferrer">
        <Image
          src="https://www.1lo.pl/img/recommended/mapa-szkoly.png"
          alt="Mapa szkoły"
          width="120px"
          height="80px"
        />
      </a>
      <Image
        src="https://www.1lo.pl/img/recommended/dzs.png"
        alt="Dobrze Zaprojektowana Klasa - Uczestniczymy w programie 'Projekt z klasą'"
        width="110px"
        height="80px"
      />
    </Patrons>
    <StyledFooter>
      <LogoWrapper>
        <Logo>
          <Image
            src="https://www.1lo.pl/img/logo-footer.png"
            width="140px"
            height="130px"
            alt="Logo"
          />
        </Logo>
        <div>
          <Image
            src="https://www.1lo.pl/img/ico_footer/youtube.png"
            width="45px"
            height="48px"
            alt="YouTube"
          />
          <Image
            src="https://www.1lo.pl/img/ico_footer/fb.png"
            width="45px"
            height="48px"
            alt="Facebook"
          />
          <Image
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
