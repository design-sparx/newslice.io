import React from 'react';
import { Article } from '../../constants/articles';
import { Carousel } from '@mantine/carousel';
import { Box, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ImageCard, TextImageCard } from '../ArticleCards';
import { Size } from '../../constants/cardSizes';

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

interface HeadlinesProps {
  articles: Article[];
}

const HeadlinesSection = ({ articles }: HeadlinesProps): JSX.Element => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = articles.map((article) => (
    <Carousel.Slide key={article.name}>
      <ImageCard article={article} height={400} showDescription={true} />
    </Carousel.Slide>
  ));

  return (
    <Box mb='lg'>
      <Group className={classes.titleWrapper}>
        <Title order={3}>
          Headlines
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
      <Carousel
        slideSize='100%'
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap='xs'
        align='start'
        slidesToScroll={mobile ? 1 : 1}
        withIndicators
        draggable
        controlSize={32}
        loop
      >
        {slides}
      </Carousel>
      <SimpleGrid cols={3} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]} py='lg'>
        {articles?.map((article) => (
          <TextImageCard
            key={article.url}
            article={article}
            size={Size.md}
            className='Card-Bg'
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HeadlinesSection;
