import { Box, Container, createStyles, Divider, Group, MantineTheme, SimpleGrid, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from './Wrapper';
import { Articles } from '../constants/articles';
import { TextImageCard } from '../components/ArticleCards';
import { Size } from '../constants/cardSizes';
import GeneralArticles from '../data/BingNews/topicUsGeneral.json';
import BusinessArticles from '../data/BingNews/topicUsBusiness.json';
import EntertainmentArticles from '../data/BingNews/topicUsEntertainment.json';
import EntertainmentTvArticles from '../data/BingNews/topicUsEntertainment_MovieAndTV.json';
import EntertainmentMusicArticles from '../data/BingNews/topicUsEntertainment_Music.json';
import HealthArticles from '../data/BingNews/topicUsHealth.json';
import PoliticsArticles from '../data/BingNews/topicUsPolitics.json';
import ProductsArticles from '../data/BingNews/topicUsProducts.json';
import ScienceAndTechArticles from '../data/BingNews/topicUsScienceAndTechnology.json';
import TechnologyArticles from '../data/BingNews/topicUsTechnology.json';
import ScienceArticles from '../data/BingNews/topicUsScience.json';
import SportsArticles from '../data/BingNews/topicUsSports.json';
import GolfArticles from '../data/BingNews/topicUsSports_Golf.json';
import NbaArticles from '../data/BingNews/topicUsSports_NBA.json';
import CbbArticles from '../data/BingNews/topicUsSports_CBB.json';
import MlbArticles from '../data/BingNews/topicUsSports_MLB.json';
import CfbArticles from '../data/BingNews/topicUsSports_CFB.json';
import NflArticles from '../data/BingNews/topicUsSports_NFL.json';
import NhlArticles from '../data/BingNews/topicUsSports_NHL.json';
import SoccerArticles from '../data/BingNews/topicUsSports_Soccer.json';
import TennisArticles from '../data/BingNews/topicUsSports_Tennis.json';
import WorldArticles from '../data/BingNews/topicUsWorld.json';
import AfricaArticles from '../data/BingNews/topicUsWorld_Africa.json';
import AmericaArticles from '../data/BingNews/topicUsWorld_Americas.json';
import AsiaArticles from '../data/BingNews/topicUsWorld_Asia.json';
import EuropeArticles from '../data/BingNews/topicUsWorld_Europe.json';
import UsArticles from '../data/BingNews/topicUs_US.json';
import UsNorthEastArticles from '../data/BingNews/topicUs_US_Northeast.json';
import UsSouthArticles from '../data/BingNews/topicUs_US_South.json';
import MidwestArticles from '../data/BingNews/topicUs_US_Midwest.json';
import WestArticles from '../data/BingNews/topicUs_US_West.json';
import { Helmet } from 'react-helmet';

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
    switch (categoryTitle) {
      case 'Business':
        setArticles(BusinessArticles);
        break;
      case 'Entertainment':
        setArticles(EntertainmentArticles);
        break;
      case 'Entertainment_MovieAndTV':
        setArticles(EntertainmentTvArticles);
        break;
      case 'Entertainment_Music':
        setArticles(EntertainmentMusicArticles);
        break;
      case 'Health':
        setArticles(HealthArticles);
        break;
      case 'Politics':
        setArticles(PoliticsArticles);
        break;
      case 'Products':
        setArticles(ProductsArticles);
        break;
      case 'ScienceAndTechnology':
        setArticles(ScienceAndTechArticles);
        break;
      case 'Technology':
        setArticles(TechnologyArticles);
        break;
      case 'Science':
        setArticles(ScienceArticles);
        break;
      case 'World':
        setArticles(WorldArticles);
        break;
      case 'World_Africa':
        setArticles(AfricaArticles);
        break;
      case 'World_Americas':
        setArticles(AmericaArticles);
        break;
      case 'World_Asia':
        setArticles(AsiaArticles);
        break;
      case 'World_Europe':
        setArticles(EuropeArticles);
        break;
      case 'US':
        setArticles(UsArticles);
        break;
      case 'US_Northeast':
        setArticles(UsNorthEastArticles);
        break;
      case 'US_South':
        setArticles(UsSouthArticles);
        break;
      case 'US_Midwest':
        setArticles(MidwestArticles);
        break;
      case 'US_West':
        setArticles(WestArticles);
        break;
      case 'Sports':
        setArticles(SportsArticles);
        break;
      case 'Sports_Golf':
        setArticles(GolfArticles);
        break;
      case 'Sports_NBA':
        setArticles(NbaArticles);
        break;
      case 'Sports_NFL':
        setArticles(NflArticles);
        break;
      case 'Sports_NHL':
        setArticles(NhlArticles);
        break;
      case 'Sports_Soccer':
        setArticles(SoccerArticles);
        break;
      case 'Sports_Tennis':
        setArticles(TennisArticles);
        break;
      case 'Sports_CFB':
        setArticles(CfbArticles);
        break;
      case 'Sports_CBB':
        setArticles(CbbArticles);
        break;
      case 'Sports_MLB':
        setArticles(MlbArticles);
        break;
      default:
        setArticles(GeneralArticles);
        break;
    }
  }, [categoryTitle]);

  return (
    <div>
      <Wrapper showRight>
        <Helmet>
          <title>Newslice - {categoryTitle}</title>
        </Helmet>
        <Container fluid>
          <Box mb='lg'>
            <Group className={classes.titleWrapper}>
              <Title order={3}>
                {categoryTitle}
              </Title>
            </Group>
            <Divider />
            <SimpleGrid cols={3} spacing='md' breakpoints={[{ maxWidth: 'sm', cols: 1 }]} py='lg'>
              {articles?.value.map((article) => (
                <TextImageCard
                  key={article.url}
                  article={article}
                  size={Size.md}
                  className='Card-Bg'
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
