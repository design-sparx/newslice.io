import { Card, Center, createStyles, Group, Image, MantineTheme, Text, useMantineTheme } from '@mantine/core';
import { Article } from '../../constants/articles';
import { Size } from '../../constants/cardSizes';
import { IconCalendar, IconNews } from '@tabler/icons';

const useStyles = createStyles((theme: MantineTheme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    textAlign: 'left',
    padding: theme.spacing.md,
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
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: 7,
  },
}));

interface ArticleCardProps {
  article: Article;
  size?: Size;
  showDescription?: boolean
}

const TextImageCard = ({ className, article, size, showDescription }: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>): JSX.Element => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { url, urlToImage, title, source, description, publishedAt } = article;
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
    <Card className={cx(classes.card, className)}>
      <Card.Section>
        {/* @ts-expect-error */}
        <Image src={urlToImage} height={imageDimensions} radius='md' withPlaceholder />
      </Card.Section>

      <Text
        className={classes.title}
        weight={500}
        lineClamp={lineClamp}
        component='a'
        mb={margin}
        {...linkProps}
      >
        {title}
      </Text>

      <Group noWrap spacing='xs' className={classes.footer}>
        <Center>
          <IconNews size={14} stroke={1.5} color={theme.colors.dark[2]} />
          <Text size='xs' color='dimmed' weight={700} ml={4}>{source.name}</Text>
        </Center>
        <Text size='xs' color='dimmed'>-</Text>
        <Center>
          <IconCalendar size={14} stroke={1.5} color={theme.colors.dark[2]} />
          <Text size='xs' color='dimmed' ml={4}>{new Date(publishedAt).toLocaleDateString()}</Text>
        </Center>
      </Group>

      {(showDescription === true) &&
        <Text className={classes.description} size='sm' lineClamp={3}>
          {description}
        </Text>
      }
    </Card>
  );
};

export default TextImageCard;
