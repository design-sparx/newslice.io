import { Box, Container, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from './Wrapper';
import { Categories } from '../constants/categories';
import { Articles } from '../constants/articles';
import {
  HeadlinesCategoryBusiness,
  HeadlinesCategoryEntertainment,
  HeadlinesCategoryGeneral,
  HeadlinesCategoryHealth,
  HeadlinesCategoryScience,
  HeadlinesCategorySports,
  HeadlinesCategoryTechnology,
} from '../data';
import { TextImageCard } from '../components/ArticleCards';
import { Size } from '../constants/cardSizes';

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

const Category = (): JSX.Element => {
  const { classes } = useStyles();
  const { categoryTitle } = useParams();
  const [articles, setArticles] = useState<Articles>();

  useEffect(() => {
    if (categoryTitle === Categories.general) {
      setArticles(HeadlinesCategoryGeneral);
    } else if (categoryTitle === Categories.business) {
      setArticles(HeadlinesCategoryBusiness);
    } else if (categoryTitle === Categories.entertainment) {
      setArticles(HeadlinesCategoryEntertainment);
    } else if (categoryTitle === Categories.health) {
      setArticles(HeadlinesCategoryHealth);
    } else if (categoryTitle === Categories.science) {
      setArticles(HeadlinesCategoryScience);
    } else if (categoryTitle === Categories.sports) {
      setArticles(HeadlinesCategorySports);
    } else {
      setArticles(HeadlinesCategoryTechnology);
    }
  }, [categoryTitle]);

  return (
    <div>
      <Wrapper>
        <Container fluid>
          <Box mb='lg'>
            <Group className={classes.titleWrapper}>
              <Title order={3}>
                {categoryTitle}
              </Title>
            </Group>
            <Divider />
            <SimpleGrid cols={2} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]} py='lg'>
              {articles?.articles.map((article) => (
                <TextImageCard
                  key={article.url}
                  article={article}
                  size={Size.lg}
                  showDescription
                />
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Category;
