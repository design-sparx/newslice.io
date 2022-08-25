import { Box, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { HorizontalCard, TextImageCard } from '../ArticleCards';
import { Article } from '../../constants/articles';

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
  articles: Article[];
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
      <TextImageCard article={articles[0]} showDescription={false} />
      <SimpleGrid cols={1} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {articles.slice(1, 5).map((article) => (
          <HorizontalCard key={article.url} article={article} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TrendingSection;
