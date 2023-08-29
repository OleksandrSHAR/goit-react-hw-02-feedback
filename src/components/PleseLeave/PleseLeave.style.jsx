import styled from 'styled-components';
import { theme } from '../theme';
export const FetbeckItem = styled.li`
  :hover {
    background-color: ${props => {
      switch (props.option) {
        case 'good':
          return '#04FF20';
        case 'neutral':
          return '#E0EB54';
        case 'bad':
          return '#FF050B';
        default:
          return null;
      }
    }};
  }
`;
export const BtFetbeck = styled.button`
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.wite};
`;
