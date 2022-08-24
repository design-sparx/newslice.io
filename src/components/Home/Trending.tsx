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

const TrendingSection = ({ articles }: TrendingProps) => {
  const { classes } = useStyles();
  return (
    <Box mb="lg">
      <Group className={classes.titleWrapper}>
        <Title order={3}>
          Trending articles
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
      <TextImageCard article={articles[15]} showDescription={false}/>
      <SimpleGrid cols={1} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {articles.slice(16, 20).map((article) => (
          <HorizontalCard key={article.url} article={article} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TrendingSection;
