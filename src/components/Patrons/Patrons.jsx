import React from 'react';
import { PatronImage, PatronsWrapper } from './Patrons.style';

const Patrons = () => (
  <PatronsWrapper>
    <a href="https://www.agh.edu.pl/" target="_blank" rel="noreferrer">
      <PatronImage
        src="https://www.1lo.pl/img/recommended/agh.jpg"
        alt="Link do Akademii górniczo hutniczej"
      />
    </a>
    <a
      href="https://www.kuratorium.krakow.pl/"
      target="_blank"
      rel="noreferrer"
    >
      <PatronImage
        src="https://www.1lo.pl/img/recommended/kuratorium.jpg"
        alt="Link do Kuratorium Oświaty w Krakowie"
      />
    </a>
    <a
      href="https://www.facebook.com/su.1lo.staszic/"
      target="_blank"
      rel="noreferrer"
    >
      <PatronImage
        src="https://www.1lo.pl/img/recommended/samorzad-uczniowski-1lo.jpg"
        alt="Link do Facebooka szkolnego"
      />
    </a>
    <a
      href="https://www.facebook.com/nadpoziomy2.0/"
      target="_blank"
      rel="noreferrer"
    >
      <PatronImage
        src="https://www.1lo.pl/img/recommended/nad-poziomy_2_0.png"
        alt="Link do Facebooka gazetki szkolnej"
        isRectangle
      />
    </a>
    <a
      href="https://www.facebook.com/biblioteka1lochrzanow/"
      target="_blank"
      rel="noreferrer"
    >
      <PatronImage
        src="https://www.1lo.pl/img/recommended/biblioteka.png"
        alt="Link do Facebooka biblioteki"
      />
    </a>
    <a href="https://academica.edu.pl" target="_blank" rel="noreferrer">
      <PatronImage
        src="https://www.1lo.pl/img/recommended/academica.png"
        alt="Link do Cyfrowej wypożyczalnii międzybibliotecznej książek i czasopism naukowych"
        isRectangle
      />
    </a>
    <a href="http://staszic.org" target="_blank" rel="noreferrer">
      <PatronImage
        src="https://www.1lo.pl/img/recommended/sps.png"
        alt="Link do Stowarzyszenia Przyjaciela Staszica"
        isRectangle
      />
    </a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" target="_blank" rel="noreferrer">
      <PatronImage
        src="https://www.1lo.pl/img/recommended/mapa-szkoly.png"
        alt="Mapa szkoły"
        isRectangle
      />
    </a>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>
      <PatronImage
        src="https://www.1lo.pl/img/recommended/dzs.png"
        alt="Dobrze Zaprojektowana Klasa - Uczestniczymy w programie 'Projekt z klasą'"
        isRectangle
      />
    </a>
  </PatronsWrapper>
);

export default Patrons;
