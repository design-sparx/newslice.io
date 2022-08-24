import React, { useRef } from 'react';
import { Article } from '../../constants/articles';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { Size } from '../../constants/cardSizes';
import { HorizontalCard } from '../ArticleCards';

interface FeedProps {
  articles: Article[];
}

const FeedSection = ({ articles }: FeedProps): JSX.Element => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = articles.slice(0, 5).map((article) => (
    <Carousel.Slide key={article.title}>
      <HorizontalCard article={article} size={Size.sm} />
    </Carousel.Slide>
  ));

  return (
    <div>
      <Carousel
        slideSize='25%'
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap='xs'
        align='start'
        slidesToScroll={mobile ? 1 : 1}
        draggable
        controlSize={32}
        mb='md'
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
        withControls={false}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default FeedSection;
