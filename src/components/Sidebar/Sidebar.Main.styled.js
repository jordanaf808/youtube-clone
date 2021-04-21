import styled, { css } from 'styled-components/macro';

const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props =>
    !props.expanded &&
    css`
      align-items: center;
    `}

  & > * {
    display: flex;
    flex-direction: ${props => (props.expanded ? 'row' : 'column')};
    align-items: center;
    justify-content: ${props => (props.expanded ? 'flex-start' : 'center')};

    p {
      font-size: ${props => (props.expanded ? '1rem' : ' 0.6rem')};
    }
    svg {
      display: ${props => (props.expanded ? 'block' : 'inline-block')};
      margin-right: ${props => (props.expanded ? '24px' : '')};
      margin-left: ${props => (props.expanded ? '10px' : '')};
    }
  }
  @media only screen and (max-width: 460px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export default SidebarMain;
