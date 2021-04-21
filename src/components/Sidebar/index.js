import React, { useRef } from 'react';
import { useTheme, useThemeUpdate } from '../../ThemeContext';

import {
  SidebarStyled,
  SidebarExpanded,
  SidebarShadow,
} from './Sidebar.styled';
import SidebarHeader from './Sidebar.Header.styled';
import SidebarMain from './Sidebar.Main.styled';
import SidebarBlock from './Sidebar.Block.styled';

import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone';
import VideoLibraryTwoToneIcon from '@material-ui/icons/VideoLibraryTwoTone';
import HistoryTwoToneIcon from '@material-ui/icons/HistoryTwoTone';
import MovieTwoToneIcon from '@material-ui/icons/MovieTwoTone';
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';

const Sidebar = () => {
  const sidebarRef = useRef();
  const Values = useTheme(); // retrieve state of expand from our custom useContext hook
  const [expand] = Values.expand;

  const Toggles = useThemeUpdate(); // retrieve function to toggle state of 'expand'
  const sidebarToggle = () => {
    console.log('menu clicked. ' + expand);
    Toggles.toggleExpand();
    sidebarRef.current.classList.toggle('nav-open');
  };

  return (
    <SidebarStyled>
      <SidebarHeader>
        <div className='header__menu-btn' onClick={() => sidebarToggle()}>
          <MenuSharpIcon />
        </div>
      </SidebarHeader>
      <SidebarMain>
        <SidebarBlock className='home'>
          <HomeTwoToneIcon />
          <p>Home</p>
        </SidebarBlock>
        <SidebarBlock className='trending'>
          <WhatshotTwoToneIcon />
          <p>Trending</p>
        </SidebarBlock>
        <SidebarBlock className='subscriptions'>
          <SubscriptionsTwoToneIcon />
          <p>Subscriptions</p>
        </SidebarBlock>
        <SidebarBlock className='library'>
          <VideoLibraryTwoToneIcon />
          <p>Library</p>
        </SidebarBlock>
      </SidebarMain>
      <SidebarExpanded expanded ref={sidebarRef}>
        <SidebarHeader>
          <div className='header__menu-btn' onClick={() => sidebarToggle()}>
            <MenuSharpIcon className='sidebar__hamburger' />
          </div>
          <div className='header__logo'>
            <YouTubeIcon />
            <h3 className='header__logo--title'>YouTube</h3>
          </div>
        </SidebarHeader>
        <SidebarMain expanded>
          <SidebarBlock className='home'>
            <HomeTwoToneIcon />
            <p>Home</p>
          </SidebarBlock>
          <SidebarBlock className='trending'>
            <WhatshotTwoToneIcon />
            <p>Trending</p>
          </SidebarBlock>
          <SidebarBlock className='subscriptions'>
            <SubscriptionsTwoToneIcon />
            <p>Subscriptions</p>
          </SidebarBlock>
          <span className='sidebar__divider'></span>
          <SidebarBlock className='library'>
            <VideoLibraryTwoToneIcon />
            <p>Library</p>
          </SidebarBlock>
          <SidebarBlock className='history'>
            <HistoryTwoToneIcon />
            <p>History</p>
          </SidebarBlock>
          <SidebarBlock className='yourVideos'>
            <MovieTwoToneIcon />
            <p>Your Videos</p>
          </SidebarBlock>
          <SidebarBlock className='watchLater'>
            <WatchLaterTwoToneIcon />
            <p>Watch Later</p>
          </SidebarBlock>
          <SidebarBlock className='showMore'>
            <KeyboardArrowDownTwoToneIcon />
            <p>Show More</p>
          </SidebarBlock>
        </SidebarMain>
        <SidebarShadow expand={expand} onClick={() => sidebarToggle()} />
      </SidebarExpanded>
    </SidebarStyled>
  );
};

export default Sidebar;
