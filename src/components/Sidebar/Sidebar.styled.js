import styled from 'styled-components/macro';

export const SidebarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  height: 100%;
  background: var(--bg);
  z-index: 99;
  width: 75px;
  height: 100%;
  margin-right: 10px;

  .nav-open {
    transform: translateX(100%);
  }

  .sidebar__divider:before {
    content: '';
    background: var(--bg);
    height: 32px;
  }
  .sidebar__divider:after {
    content: '';
    background: var(--button-bg);
    height: 1px;
    width: 100%;
  }
  @media only screen and (max-width: 460px) {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    height: 65px;
    background: var(--bg);
    z-index: 99;
    width: 100%;
    /* margin-right: 10px; */
  }
`;

export const SidebarExpanded = styled(SidebarStyled)`
  width: 250px;
  left: -250px;
  z-index: 999;
  background: var(--bg);

  /* transform: translateX(0%); */
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
  @media only screen and (max-width: 460px) {
    display: none;
  }
`;

export const SidebarShadow = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: ${props => (props.expand === '75px' ? '0px' : '100vw')};
  height: 100vh;
  z-index: 900;
  background: var(--text);
  opacity: 75%;
  transition: width 400ms ease-in-out;
`;

// export default SidebarStyled;
