import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Como podemos te chamar?'),
  email: Yup.string()
    .email('Esse email ta meio estranho, não acha?')
    .required('Precisamos de um email'),
  password: Yup.string()
    .min(
      6,
      'Essa dai até minha vó vai adivinhar, tenta uma maior! (mínimo 6 caracteres)'
    )
    .required('Escolha uma senha e não conte pra ninguém'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <h1>GoBarber</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
