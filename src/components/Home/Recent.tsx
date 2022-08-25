import { Box, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { HorizontalCard } from '../ArticleCards';
import { Article } from '../../constants/articles';
import { Size } from '../../constants/cardSizes';

const useStyles = createStyles((theme: MantineTheme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  titleWrapper: {
    paddingBottom: theme.spacing.lg,
  },
}));

interface RecentProps {
  articles: Article[];
}

const RecentSection = ({ articles }: RecentProps) => {
  const { classes } = useStyles();
  return (
    <Box mb="lg">
      <Group className={classes.titleWrapper}>
        <Title order={3}>
          Recent posts
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
      <SimpleGrid cols={1} spacing='xs' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {articles.map((article) => (
          <HorizontalCard
            key={article.url}
            article={article}
            size={Size.md}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecentSection;
