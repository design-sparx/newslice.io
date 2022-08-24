import React from 'react';
import { Article } from '../../constants/articles';
import { Button, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import { TextImageCard } from '../ArticleCards';
import TitleCard from '../ArticleCards/TitleCard';

interface CategoriesProps {
  articles: Article[];
  category: string;
}

const useStyles = createStyles((theme: MantineTheme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },
  titleWrapper: {
    paddingBottom: theme.spacing.xl,
  },
}));

const CategoriesSection = ({ category, articles }: CategoriesProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Group className={classes.titleWrapper}>
        <Title order={2}>
          {category}
        </Title>
      </Group>
      <Divider className={classes.titleWrapper} />
      <TitleCard key={articles[0].url} article={articles[0]} imageHeight={300} />
      <SimpleGrid cols={3} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {articles.slice(1, 4).map((article) => (
          <TextImageCard key={article.url} article={article} showDescription/>
        ))}
      </SimpleGrid>
      <Group>
        <Button
          component='a'
          href=''
        >
          view more
        </Button>
      </Group>
    </div>
  );
};

export default CategoriesSection;
