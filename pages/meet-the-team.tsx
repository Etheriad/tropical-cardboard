/* eslint-disable no-multi-str */
import { Stack } from '@mantine/core';
import type { NextPage } from 'next';
import { Navigation } from '../common/Navigation';
import { ProfileCardGenerator } from '../common/Cards';
import rektGuy from '../public/images/rekt.gif';
import etheriad from '../public/images/etheriad.png';

const PROFILES = [
  {
    title: 'Etheriad',
    text: "Hey there, Im Etheriad. I'm here to learn and build. I've\
    always been curious and love tinkering with things to learn how\
    they work. I first learned about Bitcoin in 2013. I wanted to\
    figure out how to mine it, but a friend told me it wasnt really\
    worth it because it would cost about the same in electricity as\
    I would make mining and it was complicated for someone who didnt\
    know much about computers and programming. I decided to see the idea on the shelf\
    Bitcoin was around $100 usd.\
    In 2017 I rediscovered cryptocurencies after hearing\
    about a project that used the same technology as\
    Bitcoin, but instead of just tranferring ballences, you could\
    create computer programs. It was a world network computer called Ethereum. I thought that\
    sounded like an impcatful project. The\
    technology was young, and I figured it would take years for\
    engineers to create meaningful programs on this world computer\
    network. In May of 2021 I heard about NFTs and did some\
    exploring about how things had develpoed on the Ethereum\
    network. I went to opensea to check it out. I didnt see much that\
    impressed me and after spending $30 usd in GWEI or gas fees to\
    transfer a free NFT to my wallet, I decided things were\
    progressing, but the technology wasnt there yet. Then in October\
    of 2021, I heard about some NFTs that were selling at Christies\
    auction house. I watched the auction live, and realized after\
    many years of watching from the sidelines, I needed to dive in\
    and learn as much as I could. This has led me on a wild ride of\
    spending lots of time reading, and lots of time talking with\
    different people from different projects in discord and twitter. Some of my\
    favorite people can be found in the following projects. Curio\
    Cards, VeeDAO, Big Head Club, Fyat Lux, and Phoenixes by habbit\
    nest. Thanks for taking the time to read a little about me.",
    image: etheriad,
    alt: 'Etheriad'
  },
  {
    title: 'Rekt Boi',
    text: 'New to the Web3.0 space, Rekt Boi is still trying to get his wits about him.',
    image: rektGuy,
    alt: 'Rekt Guy'
  }
];

const MeetTheTeam: NextPage = () => {
  return (
    <>
      <Navigation selected="Meet The Team" />
      <Stack className="mt-5">
        {PROFILES.map((profile) => (
          <ProfileCardGenerator
            key={profile.title}
            title={profile.title}
            text={profile.text}
            image={profile.image}
            alt={profile.alt}
          />
        ))}
      </Stack>
    </>
  );
};

export default MeetTheTeam;
