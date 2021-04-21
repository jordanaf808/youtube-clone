import styled from 'styled-components/macro';

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex start;
  align-items: center;
  height: 65px;
  padding: 16px 0 14px;

  .header__menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    cursor: pointer;
    svg {
      font-size: 1.55rem;
      color: #606060;
    }
  }
  .header__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: red;
      font-size: 2em;
    }
    .header__logo--title {
      color: black;
    }
  }
  @media only screen and (max-width: 460px) {
    display: none;
  }
`;

export default SidebarHeader;
