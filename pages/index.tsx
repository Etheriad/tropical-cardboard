import { Title, Button } from '@mantine/core';
import type { NextPage } from 'next';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navigation from '../components/Navigation';
import { useRef } from 'react';

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
    link: '/coin-exchange'
  },
  {
    label: 'Soda Machine',
    link: '/soda-machine'
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

const Home: NextPage = () => {
  const ref = useRef<IParallax>(null);

  const scrollToCoinExchange = () => {
    ref.current!.scrollTo(6);
  };

  const scrollToSodaMachine = () => {
    ref.current!.scrollTo(7);
  };

  return (
    <>
      <Navigation links={NAV_LINKS} />
      <Button variant="subtle" onClick={scrollToCoinExchange}>
        Scroll to Coin Exchange
      </Button>
      <br />
      <Button variant="subtle" onClick={scrollToSodaMachine}>
        Scroll to Soda Machine
      </Button>
      <Parallax pages={10} ref={ref}>
        <ParallaxLayer
          style={{ backgroundSize: 'cover', backgroundColor: 'turquoise' }}
        >
          <Title order={1} align="center" color="violet">
            Welcome to the
          </Title>
          <Title order={1} weight={700} italic align="center" color="violet">
            MetaVerse!
          </Title>
          <Title order={1} align="center" color="violet">
            Grab a soda
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{ backgroundSize: 'cover', backgroundColor: 'purple' }}
        >
          <Title align="center" color="orange">
            {' '}
            Hello and welcome to the MetaVerse! Why dont you grab a soda while
            while we look around. You&apos;ve probably heard a lot of buzzwords
            and crazy stories, and have some questions about what it all means.
            Lets learn some basics.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ backgroundSize: 'cover', backgroundColor: 'orange' }}
        >
          <Title align="center" color="pink">
            {' '}
            As you may have guessed you cant buy a soda in the MetaVerse with
            regular money. Youll money that works in the MetaVerse. Typically
            thats called cryptocurrency. There are alots of different types of
            cryptocurriences. Our money exchanger uses the Polygon
            Cryptocurrencie called MATIC. But in order to hold cryptocurrencies,
            your going to need a special wallet for the Metaverse.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          style={{ backgroundSize: 'cover', backgroundColor: 'pink' }}
        >
          <Title align="center" color="lime">
            {' '}
            Just like in real life, you&apos;ll need to keep your wallet safe as
            its where your money is. Dont ever store your seed phrase on your
            computer are share it with anyone.
          </Title>
          <Button
            variant="outline"
            color="orange"
            component="a"
            target="_blank"
            href="https://metamask.io/download.html"
          >
            Download MetaMask
          </Button>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          style={{ backgroundSize: 'cover', backgroundColor: 'maroon' }}
        >
          <Title align="center" color="teal">
            {' '}
            Now that we have our new wallet for the MetaVerse, lets buy some
            cryptocurrency. Visit this exchange. I recommend starting with a
            small amount like 5-10 Matic to Start. If just want to buy a soda,
            youll only need 1 MATIC.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          style={{ backgroundSize: 'cover', backgroundColor: 'gold' }}
        >
          <Title align="center" color="green">
            {' '}
            Now that you have money(cryptocurrency) for the MetaVerse in your
            new wallet, you can buy the special token that the vending machine
            takes. Somebody took the time to make these tokens look cool and
            spin around. If you want, you can keep them as a souvineer in your
            wallet (like an arcade token).
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          style={{ backgroundSize: 'cover', backgroundColor: 'lime' }}
        >
          <Title align="center" color="blue">
            {' '}
            With your new Tropical Cardboard Token, you can go to the vending
            machine and buy yourself a soda! Once you spend your token, it will
            be gone, but dont worry, you can buy more tokens while supplies
            last.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          style={{ backgroundSize: 'cover', backgroundColor: 'orange' }}
        >
          <Title align="center" color="cyan">
            {' '}
            Choose which sodaphones you want, and confirm the transaction in
            your wallet.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          style={{ backgroundSize: 'cover', backgroundColor: 'pink' }}
        >
          <Title align="center" color="grape">
            {' '}
            Contrats on your new Sodaphone! We hope you enjoy your soda while
            you explore the MetaVerse. You can view your soda on many different
            platoforms like Opensea and LooksRare. There are marketplaces where
            items are sold and traded. This is your soda. you can choose to sell
            it or give it away if you would like.
          </Title>
          <Button
            variant="outline"
            color="orange"
            component="a"
            target="_blank"
            href="https://opensea.io/account?tab=collected"
          >
            Go to OpenSea!
          </Button>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          style={{ backgroundSize: 'cover', backgroundColor: 'purple' }}
        >
          <Title align="center" color="violet">
            {' '}
            Stay tuend for more things in the MetaVerse from Tropical Cardboard.
            let us know if you have any questions and we can explore together.
          </Title>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
