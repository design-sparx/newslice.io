import { Container, createStyles, MantineTheme } from '@mantine/core';
import React from 'react';
import HomeSection from '../components/Home';
import Wrapper from './Wrapper';
import { Article } from '../constants/articles';
import {
  CategoriesData,
  HeadlinesCategoryBusiness,
  HeadlinesCategoryEntertainment, HeadlinesCategoryGeneral,
  HeadlinesCategoryHealth,
  HeadlinesCategoryScience,
  HeadlinesCategorySports, HeadlinesCategoryTechnology, HeadlinesCountryData,
} from '../data';

interface ICategories {
  title: string;
  articles: Article[];
}

const useStyles = createStyles((theme: MantineTheme) => ({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Home = (): JSX.Element => {
  const { classes } = useStyles();

  const refinedCategories = CategoriesData.links.map(c => {
    const cat = c.label;
    const a: ICategories = {
      title: '',
      articles: [],
    };
    if (cat === 'business') {
      a.title = 'business';
      a.articles = HeadlinesCategoryBusiness.articles;
    } else if (cat === 'entertainment') {
      a.title = 'entertainment';
      a.articles = HeadlinesCategoryEntertainment.articles;
    } else if (cat === 'health') {
      a.title = 'health';
      a.articles = HeadlinesCategoryHealth.articles;
    } else if (cat === 'science') {
      a.title = 'science';
      a.articles = HeadlinesCategoryScience.articles;
    } else if (cat === 'sports') {
      a.title = 'sports';
      a.articles = HeadlinesCategorySports.articles;
    } else if (cat === 'technology') {
      a.title = 'technology';
      a.articles = HeadlinesCategoryTechnology.articles;
    } else {
      a.title = 'general';
      a.articles = HeadlinesCategoryGeneral.articles;
    }

    return a;
  });

  return (
    <div>
      <Wrapper>
        <Container fluid className={classes.container}>
          <HomeSection
            feed={HeadlinesCategoryGeneral.articles.slice(0, 10)}
            headlines={HeadlinesCategoryGeneral.articles.slice(5, 10)}
            recent={HeadlinesCategoryGeneral.articles.slice(10, 15)}
            popular={HeadlinesCountryData.articles.slice(15, 20)}
            trending={HeadlinesCountryData.articles.slice(10, 15)}
            totalResults={HeadlinesCountryData.totalResults}
            categories={refinedCategories}
          />
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
