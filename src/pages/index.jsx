import React from 'react';
import Head from 'next/head';
import {
  Content,
  FirstInformation,
  AnchorToMCE,
  Article,
  ArticleText,
  Date,
  H2,
  MoreButton,
  TheMostImportantInformation,
  ImgMCE,
} from '../styles/index.styles';

const Home = () => {
  const howManyToRender = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Head>
        <title>
          Strona główna - 1 Liceum Ogólnokształcące im. St. Staszica
        </title>
      </Head>
      <Content>
        <FirstInformation>
          <TheMostImportantInformation>
            Strona główna
          </TheMostImportantInformation>
          <H2>Chrzowskie I LO w chmurze edukacyjnej</H2>
          <AnchorToMCE>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Zapraszamy na stronę <a href="#">Małopolska Chmura Edukacyjna</a>
          </AnchorToMCE>
          <ImgMCE src="https://www.1lo.pl/files/chmura.jpg" alt="" />
        </FirstInformation>
        {howManyToRender.map((element) => (
          <article key={element}>
            <Article>Sukces Filipa Baciaka</Article>
            <Date>2022-05-26</Date>
            <ArticleText>
              Filip Baciak, uczeń klasy trzeciej 1 Liceum Ogólnokształcącego im.
              Stanisława Staszica w Chrzanowie, został złotym medalistą
              Europejskiej Olimpiady z Fizyki.
            </ArticleText>
            <ArticleText>
              W Ljubljanie rywalizowały ze sobą reprezentacje z 37 krajów
              europejskich - prawie 180 uczestników. Filip, po dwóch dniach
              zmagań z zadaniami teoretycznymi i eksperymentalnymi, znalazł się
              w gronie 12 najlepszych, młodych fizyków w Europie. Cała
              reprezentacja Polski spisała się doskonale - pozostali uczniowie
              zdobyli trzy srebrne medale i jeden brązowy. Ostatecznie, jako
              zespół w klasyfikacji generalnej zajęli wysokie trzecie miejsce.
            </ArticleText>
            <MoreButton>więcej &gt;&gt;</MoreButton>
          </article>
        ))}
      </Content>
    </>
  );
};

export default Home;
