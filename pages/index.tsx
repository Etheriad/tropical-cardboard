import { Title, Button, Container, Title } from '@mantine/core';
import type { NextPage } from 'next';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Navigation } from '../common/Navigation';
import { useEffect, useRef } from 'react';
import { CoinExchange } from '../components/TropicalCardboard';
import { SodaMachine } from '../components/SodaPhones';

const COIN_EXCHANGE_HASH = '#coin-exchange';
const SODA_MACHINE_HASH = '#soda-machine';

const Home: NextPage = () => {
  const ref = useRef<IParallax>(null);

  useEffect(() => {
    const { hash } = window.location;

    if (!hash) {
      return;
    }

    if (hash === COIN_EXCHANGE_HASH) {
      scrollToCoinExchange();
    }

    if (hash === SODA_MACHINE_HASH) {
      scrollToSodaMachine();
    }
  }, []);

  const scrollToTop = () => {
    ref.current!.scrollTo(0);
  };

  const scrollToCoinExchange = () => {
    ref.current!.scrollTo(5);
  };

  const scrollToSodaMachine = () => {
    ref.current!.scrollTo(7);
  };

  const NAV_LINKS = [
    {
      label: 'Main Page',
      scrollTo: scrollToTop
    },
    {
      label: 'About',
      link: '/about'
    },
    {
      label: 'Coin Exchange',
      scrollTo: scrollToCoinExchange
    },
    {
      label: 'Soda Machine',
      scrollTo: scrollToSodaMachine
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

  return (
    <div className="fixed h-screen w-screen">
      <Navigation links={NAV_LINKS} selected="Main Page" />
      <Parallax pages={10} ref={ref}>
        <ParallaxLayer
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/0.svg)'
          }}
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
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/1.svg)'
          }}
        >
          <Title align="center" color="orange">
            {' '}
            Hello and welcome to the MetaVerse! Why dont you grab a soda while
            while we look around. You&apos;ve probably heard a lot of buzzwords
            and crazy stories, and have some questions about what it all means.
            Let&apos;s learn some basics.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/2.svg)'
          }}
        >
          <Title align="center" color="pink">
            {' '}
            As you may have guessed, you cant buy a soda in the MetaVerse with
            regular money. You&apos;ll need money that works in the MetaVerse.
            Typically that&apos;s called cryptocurrency. There are alot of
            different types of cryptocurriences. Bitcoin was the first one. Our
            money exchanger uses the Ethereum Cryptocurrency called Ether or Eth
            for short. But in order to hold cryptocurrencies, your going to need
            a special wallet for the Metaverse.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/3.svg)'
          }}
        >
          <Title align="center" color="lime">
            {' '}
            Just like in real life, you&apos;ll need to keep your wallet safe as
            it&apos;s where you keep your money. Our favorite wallet is provided
            by MetaMask. They have great support documents on their website if
            you need help. Remember, Don&apos;t ever store your seed phrase on
            your computer or share it with anyone. Write your seed phrase down
            and keep it safe.
          </Title>
          <Button
            variant="outline"
            color="orange"
            component="a"
            target="_blank"
            href="https://metamask.io/download.html"
          >
            Download the MetaMask wallet here
          </Button>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/4.svg)'
          }}
        >
          <Title align="center" color="teal">
            {' '}
            Now that we have our new wallet for the MetaVerse, let&apos;s buy
            some cryptocurrency. You can buy directly in your Metamask wallet. I
            recommend starting with a small amount like 0.001 Eth to Start. You
            can buy fractions of an Eth, which is good because as Eth has gained
            popularity, it&apos;s become more expensive to buy.
          </Title>
        </ParallaxLayer>
        <ParallaxLayer
          id="coin-machine"
          offset={5}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/5.svg)'
          }}
        >
          <Container>
            <Title align="center" color="green">
              {' '}
              Now that you have money(cryptocurrency) for the MetaVerse in your
              new wallet, you can buy the special token that the vending machine
              takes. Somebody took the time to make these tokens look cool and
              spin around. If you want, you can keep them as a souvineer in your
              wallet (like an arcade token).
            </Title>
          </Container>
          <CoinExchange />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/6.svg)'
          }}
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
          id="soda-machine"
          offset={7}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/7.svg)'
          }}
        >
          <Title align="center" color="cyan">
            {' '}
            Choose which sodaphones you want, and confirm the transaction in
            your wallet. This is usually referred to as minting when you are
            buying something new like this.
          </Title>
          <SodaMachine />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/8.svg)'
          }}
        >
          <Title align="center" color="grape">
            {' '}
            Congratulations on your new Sodaphone! We hope you enjoy your soda
            while you explore the MetaVerse. You can view your soda on many
            different platforms like Opensea and LooksRare. These are
            marketplaces where items are sold and traded. This is your soda. You
            can choose to sell it or give it away if you would like.
          </Title>
          <Button
            variant="outline"
            color="orange"
            component="a"
            target="_blank"
            href="https://opensea.io/account?tab=collected"
          >
            Go to OpenSea to see your soda!
          </Button>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/9.svg)'
          }}
        >
          <Title align="center" color="violet">
            {' '}
            Stay tuned for more things in the MetaVerse from Tropical Cardboard.
            There is alot to explore and we can&apos;t wait to see what new
            innovations happen that make our lives better. Let us know if you
            have any questions and we can explore together.
          </Title>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
