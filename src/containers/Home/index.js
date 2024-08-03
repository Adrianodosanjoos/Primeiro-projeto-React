import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { H1 } from "../../componets/title"

import { Container, Image, ContainerItens, InputLabel, Input, Button } from './styles';
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

function Home() {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: InputAge.current.value,
    });
    setUsers([...users, { id: Math.random(), name: InputName.current.value, age: InputAge.current.value }]);
    navigate('/usuarios');
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Hello</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;