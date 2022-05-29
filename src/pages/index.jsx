import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {
  Content,
  FirstInformation,
  AnchorToMCE,
  Article,
  ArticleImage,
  ArticleText,
  Date,
  H2,
  MoreButton,
  TheMostImportantInformation,
} from '../styles/index.styles';

const Home = () => (
  <>
    <Head>
      <title>Strona główna - 1 Liceum Ogólnokształcące im. St. Staszica</title>
    </Head>
    <Content>
      <FirstInformation>
        <TheMostImportantInformation>Strona główna</TheMostImportantInformation>
        <H2>Chrzowskie I LO w chmurze edukacyjnej</H2>
        <AnchorToMCE>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          Zapraszamy na stronę <a href="#">Małopolska Chmura Edukacyjna</a>
        </AnchorToMCE>
        <Image
          src="https://www.1lo.pl/files/chmura.jpg"
          alt="test img"
          width="400px"
          height="30px"
        />
      </FirstInformation>
      <article>
        <Article>Sukces Filipa Baciaka</Article>
        <Date>2022-05-26</Date>
        <ArticleImage src="https://unsplash.it/400/600" alt="test img" />
        <ArticleText>
          Filip Baciak, uczeń klasy trzeciej 1 Liceum Ogólnokształcącego im.
          Stanisława Staszica w Chrzanowie, został złotym medalistą Europejskiej
          Olimpiady z Fizyki.
        </ArticleText>
        <ArticleText>
          W Ljubljanie rywalizowały ze sobą reprezentacje z 37 krajów
          europejskich - prawie 180 uczestników. Filip, po dwóch dniach zmagań z
          zadaniami teoretycznymi i eksperymentalnymi, znalazł się w gronie 12
          najlepszych, młodych fizyków w Europie. Cała reprezentacja Polski
          spisała się doskonale - pozostali uczniowie zdobyli trzy srebrne
          medale i jeden brązowy. Ostatecznie, jako zespół w klasyfikacji
          generalnej zajęli wysokie trzecie miejsce.
        </ArticleText>
        <MoreButton>więcej &gt;&gt;</MoreButton>
      </article>
    </Content>
  </>
);

export default Home;
