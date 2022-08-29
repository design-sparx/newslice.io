import { createStyles, Card, Image, Text, Group } from '@mantine/core';
import { Size } from '../../constants/cardSizes';
import { TrendingArticle } from '../../constants/trendingArticles';

const useStyles = createStyles((theme) => ({
  card: {
    textAlign: 'left',
    marginBottom: theme.spacing.md,
  },

  title: {
    fontWeight: 500,
    lineHeight: 1.2,
  },

  body: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  article: TrendingArticle;
  size?: Size;
  showDescription?: boolean;
}

const TrendingCard = ({ article, size, showDescription }: ArticleCardVerticalProps): JSX.Element => {
  const { classes, cx } = useStyles();
  const { name, image, webSearchUrl, query, isBreakingNews } = article;
  let imageDimensions: number,
    lineClamp: number,
    margin: number;

  if (size === Size.lg) {
    imageDimensions = 150;
    lineClamp = 4;
    margin = 8;
  } else if (size === Size.sm) {
    imageDimensions = 75;
    lineClamp = 2;
    margin = 4;
  } else {
    imageDimensions = 90;
    lineClamp = 2;
    margin = 12;
  }


  return (
    <Card
      p={0}
      className={cx(classes.card, 'Card-Bg')}
      component='a'
      href={webSearchUrl}
      target='_blank'
    >
      <Group noWrap spacing={0} align='center'>
        <Image
          src={image.url}
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
            size={size === Size.lg ? 'md': 'sm'}
            component='span'
          >
            {query.text}
          </Text>
          <Text size='xs'>{name}</Text>
          <Text size='xs'weight={500}>{image.provider[0].name}</Text>
          {(showDescription === true) &&
            <Text lineClamp={lineClamp}>{isBreakingNews}</Text>
          }
        </div>
      </Group>
    </Card>
  );
};

export default TrendingCard;
