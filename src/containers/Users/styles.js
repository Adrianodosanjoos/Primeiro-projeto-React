import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
background: url('${Background}');
background-size: cover;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

max-height: 100%
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background: linear-gradient( 
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
 );
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(45px);

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  max-height: 100%

`;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size:34px;
line-height: 40px;

text-align: center;

color: #ffffffff;

margin-bottom: 80px;
`;



export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 120px;

background: transparent;
border-radius: 14px;
border: 1px solid #ffff;

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;

color: #ffffffff;

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.5;
}

img {
  transform: rotateY(180deg);
}

`;

export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px, 4px, 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;
outline:none;
border: none;

p {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  color: #ffffff;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
`;

