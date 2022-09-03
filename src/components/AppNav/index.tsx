import {
  createStyles,
  Header,
  Group,
  Text,
  Divider,
  Container,
  ActionIcon,
  Tooltip,
  Center,
  Menu, TextInput,
} from '@mantine/core';
import { IconSearch, IconNews, IconBell, IconSettings, IconChevronDown, IconDots } from '@tabler/icons';
import { Market } from '../../constants/market';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    boxShadow: theme.shadows.md,
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
    background: 'transparent',

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
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${theme.colors.gray[1]}`,
  },
}));

interface AppNavProps {
  market?: Market;
  maxMenuItems: number;
}

const AppNav = ({ market, maxMenuItems }: AppNavProps): JSX.Element => {
  const { classes, cx } = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { query } = useParams();

  const menuHandler = (): JSX.Element => {
    let items: JSX.Element[] | undefined;
    let overflow: any = <></>;
    if ((market != null) && market?.categories.length > maxMenuItems) {
      items = market.categories.slice(0, maxMenuItems).map((c) => {
        const menuItems = c.subCategories?.map((s) => (
          <Menu.Item key={s.title} component='a' href={`/#/category/${s.title}`}>{s.title}</Menu.Item>
        ));

        if (menuItems != null) {
          return (
            <Group spacing={0} key={`nav-${c.title}`}>
              <a
                href={`/#/category/${c.title}`}
                className={classes.link}
              >
                {c.title}
              </a>
              <Menu trigger='hover' exitTransitionDuration={0}>
                <Menu.Target>
                  <ActionIcon className={classes.menuControl}>
                    <IconChevronDown size={12} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>{menuItems}</Menu.Dropdown>
              </Menu>
            </Group>
          );
        }

        return (
          <a
            key={`nav-${c.title}`}
            href={`/#/category/${c.title}`}
            className={classes.link}
          >
            {c.title}
          </a>
        );
      });
      overflow = market.categories.slice(maxMenuItems, market.categories.length - 1).map(c => {
        const menuItems = c.subCategories?.map((s) => (
          <Menu.Item key={`ov-${s.title}`} component='a' href={`/#/category/${s.title}`}>{s.title}</Menu.Item>
        ));

        if (menuItems != null) {
          return (
            <Group spacing={0} key={`nav-${c.title}`}>
              <a
                href={`/#/category/${c.title}`}
                className={classes.link}
              >
                {c.title}
              </a>
              <Menu key={`menu-${c.title}`} trigger='hover' exitTransitionDuration={0}>
                <Menu.Target>
                  <ActionIcon className={classes.menuControl}>
                    <IconChevronDown size={12} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>{menuItems}</Menu.Dropdown>
              </Menu>
            </Group>
          );
        }

        return (
          <Menu.Item key={`nav-${c.title}`} component='a' href={`/#/category/${c.title}`}>{c.title}</Menu.Item>
        );
      });
    } else {
      items = market?.categories.map((c) => {
        const menuItems = c.subCategories?.map((s) => (
          <Menu.Item key={s.title}>{s.title}</Menu.Item>
        ));

        if (menuItems != null) {
          return (
            <Menu trigger='hover' exitTransitionDuration={0}>
              <Menu.Target>
                <a
                  href={`/#/category/${c.title}`}
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.linkLabel}>{c.title}</span>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
          );
        }

        return (
          <a
            key={c.title}
            href={`/#/category/${c.title}`}
            className={classes.link}
          >
            {c.title}
          </a>);
      });
    }

    return <>
      {items}
      <Menu shadow='md' width={200} trigger='hover' exitTransitionDuration={0}>
        <Menu.Target>
          <a className={classes.link}><IconDots size={14} /></a>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>More topics</Menu.Label>
          {overflow}
        </Menu.Dropdown>
      </Menu>
    </>;
  };

  /**
   * search handler
   * @param event
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      navigate(`/search/${searchTerm}`);
    }
  };

  useEffect(() => {
    setSearchTerm(query ?? '');
  }, [query]);


  return (
    <Header className={cx(classes.header, 'Nav-Bg')} mb={60} height='100%'>
      <div className={classes.inner}>
        <Group>
          <IconNews size={24} />
          <Text size='lg' transform='uppercase' weight={700}>Newslice</Text>
        </Group>
        <Group>
          <TextInput
            className={cx(classes.search, '')}
            placeholder='Search'
            icon={<IconSearch size={16} stroke={1.5} />}
            variant='filled'
            onKeyDown={handleKeyDown}
            onChange={(evt) => setSearchTerm(evt.currentTarget.value)}
            value={searchTerm}
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
      <Container fluid className={classes.inner} mt='md'>
        <Group spacing='xs' className={classes.links}>
          <a
            key={'home'}
            href='/#/'
            className={classes.link}
          >
            home
          </a>
          <Divider orientation='vertical' />
          {menuHandler()}
        </Group>
      </Container>
    </Header>
  );
};

export default AppNav;
