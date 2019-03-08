import styled from 'styled-components';
import { cssVars } from './styles/global';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
    width:100%;
    max-width:400px;
    margin: 30px;
    background: #FFF;
    border-radius: ${cssVars.borderRadiusDefault};
    padding: 20px;
`;