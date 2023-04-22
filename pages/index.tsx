import { Title, Container } from '@mantine/core';
import type { NextPage } from 'next';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Navigation } from '../common/Navigation';
import { useEffect, useRef } from 'react';
import { CoinExchange } from '../components/TropicalCardboard';
import { SodaMachine } from '../components/SodaPhones';
import { ParallaxCardGenerator } from '../common/Cards';
import SodaPhonesStock from '../components/SodaPhones/SodaPhonesStock';

const COIN_EXCHANGE_HASH = '#coin-exchange';
const SODA_MACHINE_HASH = '#soda-machine';

const classes = {
  container: {
    row: 'flex items-center justify-center h-screen',
    col: 'flex flex-col items-center justify-center h-screen'
  }
};

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
    },
    {
      label: 'Docs',
      link: 'http://www.docs.tropicalcardboard.com/'
    }
  ];

  return (
    <div className="fixed h-screen w-screen">
      <Navigation links={NAV_LINKS} selected="Main Page" />
      <Parallax pages={10} ref={ref}>
        <ParallaxLayer
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/0.svg)',
            // Transform to flip the background
            transform: 'scale(-1, -1)'
          }}
        >
          {/* Add rotate to flip over text */}
          <Container className={classes.container.col + ' rotate-180'}>
            <Title order={1} align="center" color="violet">
              Welcome to the
            </Title>
            <Title order={1} weight={700} italic align="center" color="violet">
              MetaVerse!
            </Title>
            <Title order={1} align="center" color="violet">
              Grab a soda!
            </Title>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/1.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              title="Hello and Welcome to the MetaVerse!"
              text="Why dont you grab a soda while
              while we look around. You've probably heard a lot of buzzwords
              and crazy stories, and have some questions about what it all means.
              Let's learn some basics."
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/2.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              text="As you may have guessed, you cant buy a soda in the MetaVerse with
            regular money. You'll need money that works in the MetaVerse.
            Typically that's called cryptocurrency. There are alot of
            different types of cryptocurriences. Bitcoin was the first one. Our
            money exchanger uses the Ethereum Cryptocurrency called Ether or Eth
            for short. But in order to hold cryptocurrencies, you're going to need
            a special wallet for the Metaverse."
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/3.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              text="Just like in real life, you'll need to keep your wallet safe as
              it's where you keep your money. Our favorite wallet is provided
              by MetaMask. They have great support documents on their website if
              you need help. Remember, Don't ever store your seed phrase on
              your computer or share it with anyone. Write your seed phrase down
              and keep it safe."
              buttons={[
                {
                  href: 'https://metamask.io/download.html',
                  text: 'Download the MetaMask wallet here'
                }
              ]}
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/4.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              text="Now that we have our new wallet for the MetaVerse, let's buy
              some cryptocurrency. You can buy directly in your Metamask wallet. I
              recommend starting with a small amount like 0.01 Eth to Start. You
              can buy fractions of an Eth, which is good because as Eth has gained
              popularity, it's become more expensive to buy."
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          id="coin-exchange"
          offset={5}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/5.svg)'
          }}
        >
          <Container className={classes.container.col}>
            <ParallaxCardGenerator
              text="Now that you have money (cryptocurrency) for the MetaVerse in your
            new wallet, you can buy the special token that the vending machine
            takes. Somebody took the time to make these tokens look cool and
            spin around. If you want, you can keep them as a souvineer in your
            wallet (like an arcade token)."
              buttons={[
                {
                  text: 'Tropical Cardboard Coins on OpenSea',
                  href: 'https://opensea.io/collection/tropical-cardboard-tokens'
                }
              ]}
            />
            <CoinExchange />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/6.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              text="With your new Tropical Cardboard Token, you can go to the vending
                machine and buy yourself a soda! Once you spend your token, it will
                be gone, but dont worry, you can buy more tokens while supplies
                last."
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          id="soda-machine"
          offset={7}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/7.svg)'
          }}
        >
          <Container className={classes.container.col}>
            <ParallaxCardGenerator
              text="Choose which sodaphones you want, and confirm the transaction in
              your wallet. This is usually referred to as minting when you are
              buying something new like this."
              buttons={[
                {
                  text: 'Soda Phones on OpenSea',
                  href: 'https://opensea.io/collection/sodaphones'
                }
              ]}
            />
            <div className="flex justify-center">
              <SodaMachine />
              <SodaPhonesStock />
            </div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={8}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/8.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              text="Congratulations on your new Sodaphone! We hope you enjoy your soda
              while you explore the MetaVerse. You can view your soda on many
              different platforms like Opensea and LooksRare. These are
              marketplaces where items are sold and traded. This is your soda. You
              can choose to sell it or give it away if you would like."
              buttons={[
                {
                  text: 'Go to OpenSea to see your collection!',
                  href: 'https://opensea.io/account?tab=collected'
                },
                {
                  text: 'Tropical Cardboard Coin',
                  href: 'https://opensea.io/collection/tropical-cardboard-tokens'
                },
                {
                  text: 'Soda Phones',
                  href: 'https://opensea.io/collection/sodaphones'
                }
              ]}
            />
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/9.svg)'
          }}
        >
          <Container className={classes.container.row}>
            <ParallaxCardGenerator
              text="Stay tuned for more things in the MetaVerse from Tropical Cardboard.
              There is alot to explore and we can't wait to see what new
              innovations happen that make our lives better. Let us know if you
              have any questions and we can explore together."
            />
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
