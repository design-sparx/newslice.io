import { Box, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { TextImageCard } from '../ArticleCards';
import { TrendingArticle } from '../../constants/trendingArticles';
import TrendingCard from '../ArticleCards/TrendingCard';

const useStyles = createStyles((theme: MantineTheme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  titleWrapper: {
    paddingBottom: theme.spacing.lg,
  },
}));

interface TrendingProps {
  articles: TrendingArticle[];
}

const TrendingSection = ({ articles }: TrendingProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box mb='lg'>
      <Group className={classes.titleWrapper}>
        <Title order={3}>
          Trending
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
      <SimpleGrid cols={1} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {articles.map((article) => (
          <TrendingCard key={article.webSearchUrl} article={article} showDescription/>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TrendingSection;
