import { createStyles, Card, Image, Text, Group, Center, Avatar } from '@mantine/core';
import { Article } from '../../constants/articles';
import { Size } from '../../constants/cardSizes';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    textAlign: 'left',
    marginBottom: theme.spacing.md,
  },

  title: {
    fontWeight: 500,
    lineHeight: 1.2,

    '&:hover': {
      color: theme.primaryColor,
      textDecoration: 'underline',
    },
  },

  body: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  article: Article;
  size?: Size;
  showDescription?: boolean;
}

const HorizontalCard = ({ article, size, showDescription }: ArticleCardVerticalProps): JSX.Element => {
  const { classes } = useStyles();
  const { name, url, image, description, provider, datePublished } = article;
  let imageDimensions: number,
    lineClamp: number,
    margin: number;

  if (size === Size.lg) {
    imageDimensions = 150;
    lineClamp = 4;
    margin = 8;
  } else if (size === Size.sm) {
    imageDimensions = 60;
    lineClamp = 2;
    margin = 4;
  } else {
    imageDimensions = 90;
    lineClamp = 2;
    margin = 12;
  }


  return (
    <Card
      radius='md'
      p={0}
      className={classes.card}
    >
      <Group noWrap spacing={0} align='start'>
        <Image src={image?.thumbnail.contentUrl}
               height={imageDimensions}
               width={imageDimensions}
               radius='md'
               fit='cover'
               withPlaceholder
        />
        <div className={classes.body}>
          <Text
            className={classes.title}
            component='a'
            href={url}
            lineClamp={lineClamp}
            mb={margin}
            size={size === Size.lg ? 'lg' : 'md'}
          >
            {name}
          </Text>
          <Group noWrap spacing='xs' mb='md'>
            <Center>
              <Avatar size="xs" src={provider[0].image?.thumbnail.contentUrl} />
              <Text size='xs' color='dimmed' weight={500} ml={4}>{provider[0].name}</Text>
            </Center>
            <Text size='xs' color='dimmed'>-</Text>
            <Center>
              <Text size='xs' color='dimmed' ml={4}>{new Date(datePublished).toLocaleDateString()}</Text>
            </Center>
          </Group>
          {(showDescription === true) &&
            <Text lineClamp={lineClamp}>{description}</Text>
          }
        </div>
      </Group>
    </Card>
  );
};

export default HorizontalCard;
