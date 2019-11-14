import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from "~/assets/logo.svg";

// import { Container } from './styles';

export default function SignIn() {

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <h1>GoBarber</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Registrar-se</Link>
      </Form>
    </>
  );
}
