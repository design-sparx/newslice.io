import { Box, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { HorizontalCard } from '../ArticleCards';
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

interface PopularProps {
  articles: Article[];
}

const PopularSection = ({ articles }: PopularProps) => {
  const { classes } = useStyles();
  return (
    <Box mb="lg">
      <Group className={classes.titleWrapper}>
        <Title order={3}>
          Popular articles
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
      <SimpleGrid cols={1} spacing='xs' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {articles.slice(5, 10).map((article) => (
          <HorizontalCard key={article.url} article={article} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PopularSection;
