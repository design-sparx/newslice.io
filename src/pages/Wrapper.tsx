import React, { ReactNode, useEffect, useState } from 'react';
import AppNav from '../components/AppNav';
import { FooterLinks } from '../data/NewsApiOrg';
import FooterSection from '../components/Footer';
import { Container, createStyles, Grid, MantineTheme, SimpleGrid } from '@mantine/core';
import PopularSection from '../components/Home/Popular';
import RecentSection from '../components/Home/Recent';
import FeedSection from '../components/Home/Feeds';
import Markets from '../data/BingNews/markets.json';
import { Market } from '../constants/market';
import GeneralArticles from '../data/BingNews/topicUsGeneral.json';
import UsArticles from '../data/BingNews/topicUs_US.json';
import TrendingArticles from '../data/BingNews/trendingTopicsUS.json';

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
  const [market, setMarket] = useState<Market>();
  const { classes } = useStyles();

  useEffect(() => {
    Markets.markets.forEach(mkt => mkt.iso === 'en-US' && setMarket(mkt));
  }, [Markets]);

  return (
    <>
      <AppNav market={market} maxMenuItems={8} />
      <Container fluid className={classes.container}>
        {(showFeed === true) &&
          <FeedSection articles={TrendingArticles.value.slice(0, 10)} />
        }
        <Grid>
          <Grid.Col lg={8}>
            {children}
          </Grid.Col>
          <Grid.Col lg={4}>
            <SimpleGrid breakpoints={[
              { minWidth: 'sm', cols: 1 },
              { minWidth: 'md', cols: 2 },
              { minWidth: 1200, cols: 1 },
            ]}>
              <PopularSection articles={UsArticles.value.slice(0, 10)} />
              <RecentSection articles={GeneralArticles.value.slice(0, 10)} />
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
      <FooterSection data={FooterLinks.data} />
    </>
  );
};

export default Wrapper;
