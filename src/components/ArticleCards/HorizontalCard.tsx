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
  },

  body: {
    paddingTop: 0,
    paddingRight: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
    paddingBottom: 0,
  },
}));

interface ArticleCardVerticalProps {
  article: Article;
  size?: Size;
  showDescription?: boolean;
  className?: string;
}

const HorizontalCard = ({ article, size, showDescription, className }: ArticleCardVerticalProps): JSX.Element => {
  const { classes, cx } = useStyles();
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
    imageDimensions = 110;
    lineClamp = 2;
    margin = 12;
  }


  return (
    <Card
      className={cx(classes.card, className)}
      component='a'
      href={url}
      target='_blank'
      p={0}
    >
      <Group noWrap spacing={0} align='center'>
        <Image
          src={image?.thumbnail.contentUrl}
          height={imageDimensions}
          width={imageDimensions}
          fit='cover'
          withPlaceholder
        />
        <div className={classes.body}>
          <Text
            className={classes.title}
            lineClamp={lineClamp}
            mb={margin}
            size={size === Size.lg ? 'lg' : 'md'}
            component='span'
          >
            {name}
          </Text>
          <Group noWrap spacing='xs'>
            <Center>
              <Avatar size='xs' src={provider[0].image?.thumbnail.contentUrl} />
              <Text size='xs' weight={500} ml={4}>{provider[0].name}</Text>
            </Center>
            <Text size='xs'>-</Text>
            <Center>
              <Text size='xs'>{new Date(datePublished).toLocaleDateString()}</Text>
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
