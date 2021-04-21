import styled from 'styled-components/macro';

import YouTubeIcon from '@material-ui/icons/YouTube';

const HeaderLogo = styled.a.attrs({
  href: '#',
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 1em;
  svg {
    color: #fc2021;
    font-size: 2em;
  }
  .header__logo--title {
    color: black;
  }
`;

const HeaderLeft = () => {
  return (
    <div className='header__left'>
      <HeaderLogo>
        <YouTubeIcon />
        <h3 className='header__logo--title'>YouTube</h3>
      </HeaderLogo>
    </div>
  );
};

export default HeaderLeft;
