import React from 'react';

import { useTheme } from '../../ThemeContext';

import BodyContainer from './Body.styled.js';
import VideoCard from '../Card/index';

const Body = () => {
  // const bodyRef = useRef();
  // const expand = useTheme(); // retrieve state of expand from our custom useContext hook
  const Values = useTheme(); // retrieve state of expand from our custom useContext hook
  const [expand] = Values.expand;
  console.log('body rendered. offset: ' + expand);
  const timeElapsed = Date.now();
  const todayRaw = new Date(timeElapsed);
  const today = todayRaw.toDateString();
  console.log(today);
  const image = './images/brytny-com-C4rXIFSzEXk-unsplash.jpg';
  const channelImage = image;
  const rawRandNum = (min, max) => Math.random() * (1 + max - min) + min;
  const randNum = rawRandNum(1, 100);
  // Thankfully Jack Moore has a better solution that prevents rounding errors at all, as he discusses in an article on his blog. Just use exponential notation when rounding to a certain number of decimal places in JavaScript:
  const roundAccurately = (number, decimalPlaces) =>
    Number(Math.round(number + 'e' + decimalPlaces) + 'e-' + decimalPlaces);
  const roundedRandNum = () => roundAccurately(randNum, 2);
  const views = `${roundedRandNum()}m`;

  return (
    <BodyContainer expand={expand}>
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        image={image}
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
        channelImage={channelImage}
      />
      <VideoCard
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
      />
      <VideoCard
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
      />
      <VideoCard
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
      />
      <VideoCard
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
      />
      <VideoCard
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
      />
      <VideoCard
        title={'TITLE'}
        channel={'Channel'}
        timestamp={today}
        views={views}
      />
    </BodyContainer>
  );
};

export default Body;
