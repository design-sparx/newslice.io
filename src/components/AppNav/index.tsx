import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Text,
  Divider,
  Container,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { IconSearch, IconNews, IconBell, IconSettings } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  links: {
    textTransform: 'capitalize',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    width: 500,
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface AppNavProps {
  links: Array<{ link: string; label: string }>;
}

const AppNav = ({ links }: AppNavProps): JSX.Element => {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header className={classes.header} mb={60} height='100%'>
      <div className={classes.inner}>
        <Group>
          <IconNews size={24} />
          <Text size='lg' transform='uppercase' weight={700}>Newslice</Text>
        </Group>
        <Group>
          <Autocomplete
            className={classes.search}
            placeholder='Search'
            icon={<IconSearch size={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
        </Group>
        <Group>
          <Tooltip label='notifications'>
            <ActionIcon>
              <IconBell size={18} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='preferences'>
            <ActionIcon>
              <IconSettings size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </div>
      <Container className={classes.inner} mt='md'>
        <Group spacing={5} className={classes.links}>
          <a
            key={'home'}
            href='/'
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            home
          </a>
          <Divider orientation='vertical' />
          {items}
        </Group>
      </Container>
    </Header>
  );
};

export default AppNav;
