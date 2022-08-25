import React, { ReactNode } from 'react';
import AppNav from '../components/AppNav';
import { CategoriesData, FooterLinks, HeadlinesCategoryGeneral, HeadlinesCountryData } from '../data';
import FooterSection from '../components/Footer';
import { Container, createStyles, Grid, MantineTheme } from '@mantine/core';
import PopularSection from '../components/Home/Popular';
import TrendingSection from '../components/Home/Trending';
import RecentSection from '../components/Home/Recent';
import FeedSection from '../components/Home/Feeds';

interface WrapperProps {
  children: ReactNode;
  showFeed?: boolean;
}

const useStyles = createStyles((theme: MantineTheme) => ({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Wrapper = ({ children, showFeed }: WrapperProps): JSX.Element => {
  const { classes } = useStyles();

  return (
    <>
      <AppNav links={CategoriesData.links} />
      <Container fluid className={classes.container}>
        {(showFeed === true) &&
          <FeedSection articles={HeadlinesCategoryGeneral.articles.slice(0, 10)} />
        }
        <Grid>
          <Grid.Col lg={8}>
            {children}
          </Grid.Col>
          <Grid.Col lg={4}>
            <PopularSection articles={HeadlinesCountryData.articles.slice(15, 20)} />
            <TrendingSection articles={HeadlinesCountryData.articles.slice(10, 15)} />
            <RecentSection articles={HeadlinesCategoryGeneral.articles.slice(10, 20)} />
          </Grid.Col>
        </Grid>
      </Container>
      <FooterSection data={FooterLinks.data} />
    </>
  );
};

export default Wrapper;
