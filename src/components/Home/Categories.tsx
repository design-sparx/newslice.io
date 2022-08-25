import React from 'react';
import { Article } from '../../constants/articles';
import { createStyles, SimpleGrid, Tabs } from '@mantine/core';
import { TextImageCard } from '../ArticleCards';
import TitleCard from '../ArticleCards/TitleCard';

const useStyles = createStyles((theme) => ({
  tab: {
    textTransform: 'capitalize',
  },
}));

interface CategoriesProps {
  categories: Array<{
    title: string
    articles: Article[]
  }>;
}

const CategoriesSection = ({ categories }: CategoriesProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <>
      <Tabs defaultValue='general'>
        <Tabs.List>
          {categories.map(c =>
            <Tabs.Tab
              key={`cat-tab-${c.title}`}
              value={c.title}
              className={classes.tab}
            >
              {c.title}
            </Tabs.Tab>)
          }
        </Tabs.List>

        {categories.map(c =>
          <Tabs.Panel key={`cat-pane-${c.title}`} value={c.title} pt='xs'>
            <TitleCard article={c.articles[0]} imageHeight={300} />
            <SimpleGrid cols={2} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              {c.articles.slice(1, 10).map((article) => (
                <TextImageCard key={article.url} article={article} showDescription />
              ))}
            </SimpleGrid>
          </Tabs.Panel>,
        )}
      </Tabs>
    </>
  );
};

export default CategoriesSection;
