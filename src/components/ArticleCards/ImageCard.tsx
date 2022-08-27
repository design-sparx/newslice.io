import { Avatar, Card, Center, createStyles, Group, Text, Title } from '@mantine/core';
import { Article } from '../../constants/articles';

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
      textAlign: 'left',
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
      backgroundPosition: 'center',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: theme.spacing.md,

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    description: {
      color: theme.white,
      marginBottom: theme.spacing.md,
    },

    bodyText: {
      color: theme.white,
    },
  };
});

interface ImageCardProps {
  article: Article;
  height?: number;
  showDescription?: boolean;
}

const ImageCard = ({ article, height, showDescription }: ImageCardProps): JSX.Element => {
  const { classes } = useStyles();
  const { name, url, image, description, provider, datePublished } = article;

  return (
    <Card
      p='lg'
      shadow='lg'
      className={classes.card}
      radius='md'
      component='a'
      href={url}
      target='_blank'
      style={{ height }}
    >
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <div className={classes.image} style={{ backgroundImage: `url(${image?.thumbnail.contentUrl})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Title order={2} className={classes.title}>
            {name}
          </Title>

          {(showDescription ?? false) &&
            <Text size='sm' className={classes.description} lineClamp={2}>
              {description}
            </Text>
          }

          <Group position='apart' spacing='xs'>
            <Center>
              <Avatar src={provider[0].image?.thumbnail.contentUrl} />
              <Text size='sm' color='dimmed' weight={500} ml={4} className={classes.bodyText}>{provider[0].name}</Text>
            </Center>
            <Center>
              <Text size='sm' className={classes.bodyText} ml={4}>
                {new Date(datePublished).toLocaleDateString()}
              </Text>
            </Center>
          </Group>
        </div>
      </div>
    </Card>
  );
};

export default ImageCard;
