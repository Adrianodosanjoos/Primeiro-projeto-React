
import styled from 'styled-components';

import Background from '../../assets/background.svg';

export const Container = styled.div`
  background: url('${Background}');
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;



