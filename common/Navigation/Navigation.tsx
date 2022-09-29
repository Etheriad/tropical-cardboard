import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      cursor: 'pointer'
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
    }
  }
}));

const NAV_LINKS = [
  {
    label: 'Main Page',
    link: '/'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Coin Exchange',
    link: '/#coin-exchange'
  },
  {
    label: 'Soda Machine',
    link: '/#soda-machine'
  },
  {
    label: 'Meet The Team',
    link: '/meet-the-team'
  },
  {
    label: 'References',
    link: '/references'
  }
];

interface ObjectWithScrollTo {
  link?: never;
  label: string;
  scrollTo: () => void;
}

interface ObjectWithLink {
  link: string;
  label: string;
  scrollTo?: never;
}

interface HeaderResponsiveProps {
  links?: (ObjectWithScrollTo | ObjectWithLink)[];
  selected: string;
}

const Navigation = ({ links = NAV_LINKS, selected }: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(selected);
  const { classes, cx } = useStyles();

  const items = links.map((link) => {
    const retVal = link.scrollTo ? (
      <a
        key={link.label}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.label
        })}
        onClick={() => {
          link.scrollTo?.();
          setActive(link.label);
          close();
        }}
      >
        {link.label}
      </a>
    ) : (
      <Link key={link.label} href={link.link!}>
        <a
          key={link.label}
          className={cx(classes.link, {
            [classes.linkActive]: active === link.label
          })}
          onClick={() => {
            setActive(link.label);
            close();
          }}
        >
          {link.label}
        </a>
      </Link>
    );

    return retVal;
  });

  return (
    <Header height={HEADER_HEIGHT} mb={0} className={classes.root}>
      <Container className={classes.header}>
        <Link href={'/'}>
          <a>
            <Image
              alt="Front of Coin"
              id="coin-front"
              src={'/images/coin-front.png'}
              width={50}
              height={50}
            ></Image>
          </a>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
export default Navigation;
