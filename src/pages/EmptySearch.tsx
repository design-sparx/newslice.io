import { createStyles, Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import image from '../assets/images/no-results.png';
import Wrapper from './Wrapper';
import { Helmet } from 'react-helmet';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 120,
    paddingBottom: 120,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    opacity: .8,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const EmptySearch = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Wrapper>
      <Helmet>
        <title>Newslice - Search not found</title>
      </Helmet>
      <Container className={classes.root}>
        <SimpleGrid
          spacing={80}
          cols={2}
          breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
          style={{ alignItems: 'center' }}
        >
          <Image src={image} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text color='dimmed' size='lg'>
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Button component='a' href='#/' variant='outline' size='md' mt='xl' className={classes.control}>
              Get back to home page
            </Button>
          </div>
          <Image src={image} className={classes.desktopImage} height={300} fit='contain' />
        </SimpleGrid>
      </Container>
    </Wrapper>
  );
};

export default EmptySearch;
