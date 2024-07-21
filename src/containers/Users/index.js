import React, { useState, useEffect } from "react";

import axios from 'axios'

import { Container, H1, Image, ContainerItens,  Button, User } from './styles'

import Avatar from '../../assets/avatar.svg'

import Arrow from '../../assets/arrow.svg'

import trash from '../../assets/trash.svg'



function Users() {
  const [users, setUsers] = useState([]);
 


  
   
  async function deleteUser(userId) {
await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
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

        <Button> <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>

    </Container>
  );

}

export default Users;