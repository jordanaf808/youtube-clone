import styled from 'styled-components/macro';

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 0.5rem;
  /* gap: 1rem; */
  padding: 1rem;
  place-items: center;
  width: ${props =>
    props.expand === '75px' ? 'calc(100vw - 75px)' : 'calc(100vw - 250px)'};
  height: 100%;
  min-height: 100vh;
  margin-top: 65px;
  margin-left: ${props => (props.expand === '75px' ? '75px' : '250px')};
  background: var(--bg);
  border-top: var(--border);
  transition: width 250ms cubic-bezier(0.5, 0, 0.5, 1);
  transition: margin-left 250ms cubic-bezier(0.5, 0, 0.5, 1);
  z-index: 1;
  @media only screen and (max-width: 460px) {
    margin-left: 0;
    width: 100vw;
    height: calc(100vh - 75px);
    margin-bottom: 75px;
  }
`;

export default BodyContainer;
