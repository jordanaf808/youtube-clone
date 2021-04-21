import styled from 'styled-components/macro';

// import { useTheme } from '../../ThemeContext';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Body from '../Body';
import MobileSearchbar from '../Header/MobileSearchbar.styled';

const ContainerStyled = styled.div``;

const Container = () => {
  // const Values = useTheme(); // retrieve state of expand from our custom useContext hook
  // const [expand, setExpand] = Values.expand;
  return (
    <ContainerStyled>
      <Header />
      <MobileSearchbar />
      <Sidebar />
      <Body />
    </ContainerStyled>
  );
};
export default Container;
