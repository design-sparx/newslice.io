import {
  Avatar,
  Card,
  Center,
  createStyles,
  Group,
  Image,
  MantineTheme,
  Stack,
  Text,
} from '@mantine/core';
import { Article } from '../../constants/articles';
import { Size } from '../../constants/cardSizes';

const useStyles = createStyles((theme: MantineTheme) => ({
  card: {
    position: 'relative',
    textAlign: 'left',
    padding: 0,
  },

  title: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs / 2,
  },

  footer: {
    margin: 0,
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: 7,
  },

  center: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
}));

interface ArticleCardProps {
  article: Article;
  size?: Size;
  showDescription?: boolean;
}

const TextImageCard = ({ className, article, size, showDescription }: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>): JSX.Element => {
  const { classes, cx } = useStyles();
  const { name, url, image, description, provider, datePublished } = article;
  const linkProps = { href: url, target: '_blank', rel: 'noopener noreferrer' };
  let imageDimensions: number,
    lineClamp: number,
    margin: number;

  if (size === Size.lg) {
    imageDimensions = 200;
    lineClamp = 4;
    margin = 24;
  } else if (size === Size.sm) {
    imageDimensions = 200;
    lineClamp = 2;
    margin = 4;
  } else {
    imageDimensions = 200;
    lineClamp = 2;
    margin = 12;
  }

  return (
    <Card
      className={cx(classes.card, className)}
      component='a'
      {...linkProps}
      pt={0}
    >
      {
        (image != null) ?
          (<>
            <Card.Section>
              <Image src={image?.thumbnail.contentUrl} height={imageDimensions} />
            </Card.Section>
            <Text
              className={classes.title}
              weight={500}
              lineClamp={lineClamp}
              mb={margin}
              size={size === Size.lg ? 'lg' : 'md'}
              component='span'
            >
              {name}
            </Text>

            <Group noWrap spacing={4} className={classes.footer}>
              <Center>
                <Avatar size='sm' src={provider[0].image?.thumbnail.contentUrl} />
                <Text size='xs' weight={500} ml={4}>{provider[0].name}</Text>
              </Center>
              <Text size='xs' color='dimmed'>-</Text>
              <Center>
                <Text size='xs'>{new Date(datePublished).toLocaleDateString()}</Text>
              </Center>
            </Group>

            {(showDescription === true) &&
              <Text className={classes.description} size='sm' lineClamp={3}>
                {description}
              </Text>
            }
          </>) :
          (
            <>
              <Center className={classes.center}>
                <Stack>
                  <Text
                    className={classes.title}
                    weight={500}
                    lineClamp={lineClamp}
                    mb={margin}
                    size={size === Size.lg ? 'lg' : 'md'}
                    component='span'
                  >
                    {name}
                  </Text>

                  <Text className={classes.description} size='sm' lineClamp={3}>
                    {description}
                  </Text>

                  <Group noWrap spacing={4} className={classes.footer}>
                    <Center>
                      <Avatar size='sm' src={provider[0].image?.thumbnail.contentUrl} />
                      <Text size='xs' weight={500} ml={4}>{provider[0].name}</Text>
                    </Center>
                    <Text size='xs'>-</Text>
                    <Center>
                      <Text size='xs'>{new Date(datePublished).toLocaleDateString()}</Text>
                    </Center>
                  </Group>
                </Stack>
              </Center>
            </>
          )
      }
    </Card>
  );
};

export default TextImageCard;
