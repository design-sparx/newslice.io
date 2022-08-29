import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { createStyles, Divider, Group, MantineTheme, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { Size } from '../../constants/cardSizes';
import { TrendingArticle } from '../../constants/trendingArticles';
import TrendingCard from '../ArticleCards/TrendingCard';

const useStyles = createStyles((theme: MantineTheme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  titleWrapper: {
    paddingBottom: theme.spacing.lg,
    textTransform: 'capitalize',
  },
}));

interface FeedProps {
  articles: TrendingArticle[];
}

const FeedSection = ({ articles }: FeedProps): JSX.Element => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const autoplay = useRef(Autoplay({ delay: 10000 }));

  const slides = articles.slice(0, 5).map((article) => (
    <Carousel.Slide key={article.webSearchUrl}>
      <TrendingCard article={article} size={Size.sm} />
    </Carousel.Slide>
  ));

  return (
    <div>
      <Group className={classes.titleWrapper}>
        <Title order={3}>
          Trending
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
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
        withControls
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default FeedSection;
