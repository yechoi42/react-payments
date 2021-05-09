import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const Container = styled.div`
  width: 100%;
  height: 32.5rem;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  overflow: auto;
`;

const CardListContainer = styled(FlexCenter)`
  width: 100%;
  flex-direction: column;
  margin: 0;
`;

const CardAddButtonContainer = styled(FlexCenter)`
  width: 100%;
  margin: 0;
`;

export { Container, CardListContainer, CardAddButtonContainer };
