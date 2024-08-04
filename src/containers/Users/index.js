import React, { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';

import { Container,  Image, ContainerItens, Button, User } from './styles';
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import trash from '../../assets/trash.svg';

import H1 from '../../components/title';

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    }
    fetchData();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate(-1);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuarios</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={trash} alt="Lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;