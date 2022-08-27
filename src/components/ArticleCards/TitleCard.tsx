import { createStyles, Card, Image, Text, Group, Grid, Anchor, Center, useMantineTheme } from '@mantine/core';
import { Article } from '../../constants/articles';
import { IconCalendar, IconNews } from '@tabler/icons';

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
  const theme = useMantineTheme();
  const { name, url, image, description, provider, datePublished } = article;
  return (
    <Card
      radius='md'
      p={0}
      className={classes.card}
    >
      <Grid align='center'>
        {(image != null) &&
          <Grid.Col lg={6}>
            <Image src={image.thumbnail.contentUrl} height={imageHeight} radius='md' fit='cover' />
          </Grid.Col>
        }
        <Grid.Col lg={6}>
          <div className={classes.body}>
            <Anchor
              className={classes.title}
              href={url}
            >
              {name}
            </Anchor>
            <Text lineClamp={3} my='md'>{description}</Text>
            <Group noWrap spacing='xs'>
              <Center>
                <IconNews size={14} stroke={1.5} color={theme.colors.dark[2]} />
                <Text size='xs' color='dimmed' weight={700} ml={4}>{provider[0].name}</Text>
              </Center>
              <Text size='xs' color='dimmed'>-</Text>
              <Center>
                <IconCalendar size={14} stroke={1.5} color={theme.colors.dark[2]} />
                <Text size='xs' color='dimmed' ml={4}>{new Date(datePublished).toLocaleDateString()}</Text>
              </Center>
            </Group>
          </div>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default VerticalTextCard;
