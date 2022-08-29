import { createStyles, Card, Image, Text, Group, Grid, Center, Avatar, Title } from '@mantine/core';
import { Article } from '../../constants/articles';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
    textAlign: 'left',
  },

  title: {
    fontWeight: 600,
    lineHeight: 1.2,
    color: theme.black,
    fontSize: theme.fontSizes.xl,

    '&:hover': {
      color: theme.primaryColor,
      textDecoration: 'underline',
    },
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface VerticalTextCardProps {
  article: Article;
  imageHeight: number;
}

const VerticalTextCard = ({ article, imageHeight }: VerticalTextCardProps): JSX.Element => {
  const { classes } = useStyles();
  const { name, url, image, description, provider, datePublished } = article;
  return (
    <Card
      radius='md'
      p={0}
      className={classes.card}
      component='a'
      href={url}
    >
      <Grid align='center'>
        {(image != null) &&
          <Grid.Col lg={6}>
            <Image src={image.thumbnail.contentUrl} height={imageHeight} radius='md' fit='cover' />
          </Grid.Col>
        }
        <Grid.Col lg={6}>
          <div className={classes.body}>
            <Text
              className={classes.title}
              component='a'
            >
              {name}
            </Text>
            <Text lineClamp={3} my='md'>{description}</Text>
            <Group noWrap spacing='xs'>
              <Center>
                <Avatar size='sm' src={provider[0].image?.thumbnail.contentUrl} />
                <Text size='xs' weight={500}>{provider[0].name}</Text>
              </Center>
              <Text size='xs'>-</Text>
              <Center>
                <Text size='xs'>{new Date(datePublished).toLocaleDateString()}</Text>
              </Center>
            </Group>
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default VerticalTextCard;
