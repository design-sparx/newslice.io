import React, { ReactNode, useEffect, useState } from 'react';
import AppNav from '../components/AppNav';
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
  showRight?: boolean;
}

const useStyles = createStyles((theme: MantineTheme) => ({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Wrapper = ({ children, showFeed, showRight }: WrapperProps): JSX.Element => {
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
            <Grid.Col lg={(showRight === true) ? 8: 12}>
              {children}
            </Grid.Col>
            {(showRight === true) &&
              <Grid.Col lg={4}>
                <SimpleGrid breakpoints={[
                  { minWidth: 'sm', cols: 1 },
                  { minWidth: 'md', cols: 2 },
                  { minWidth: 1200, cols: 1 },
                ]}>
                  <PopularSection articles={UsArticles.value.slice(0, 5)} />
                  <RecentSection articles={GeneralArticles.value.slice(0, 5)} />
                </SimpleGrid>
              </Grid.Col>
            }
          </Grid>
        </Container>
      <FooterSection />
    </>
  );
};

export default Wrapper;
