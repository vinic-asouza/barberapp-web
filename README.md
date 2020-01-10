# BarberApp

O **Barber App** é um sistema pensado para estabelecimentos prestadores de servicos de beleza em geral, com foco inicial no gerenciamento de agendamentos. No sistema é possível cadastrar prestadores(funcionarios), efetuar os agendamentos e verificar agenda.
O projeto é divido em 3 aplicacoes:
- **Servidor (API / Back-end)**:

    Onde é realizado toda lógica de negócio e o fluxo de dados.
    
    Linguagem: Node.js
    
    Repositório: https://github.com/vinic-asouza/barberapp-api.git

- **Sistema WEB (Front-end)**:

    Repositório: https://github.com/vinic-asouza/barberapp-web.git
    
    Linguagem: React

    Ambiente para uso do estabelicimento/prestador onde é possível realizar o cadastro dos prestadores, gerenciar o perfil e verificar a agenda.

- **App Mobile (Mobile)**:

    Repositório: https://github.com/vinic-asouza/barberapp-mobile.git
    
    Linguagem: React Native

    Ambiente para uso dos clientes, onde é possível se cadastrar e realizar os agendamentos de servicos.

# BarberApp - WEB

Sistema WEB do projeto BarberApp. Construido utilizando como principais frameworks e bibliotecas: **React+Redux+Saga**

![web-login](https://user-images.githubusercontent.com/32015296/72161951-d08dec00-339f-11ea-92ea-65853b5b7af4.png)

![web-agenda](https://user-images.githubusercontent.com/32015296/72161966-d97ebd80-339f-11ea-8bbe-5753cf2ef8a5.png)

![web-perfil](https://user-images.githubusercontent.com/32015296/72161978-dedc0800-339f-11ea-8cb4-3bc3caa3a009.png)

# Tecnologias utilizadas:

- ReactJS
- Redux
- Redux-Saga
- React Router v4
- styled-components
- Axios
- History
- Immer
- Polished
- React-Toastify
- React-Icons
- react-perfect-scrollbar
- Unform
- Yup
- date-fns
- Reactotron
- VS Code with EditorConfig and ESLint

# Intruções para inicialização do projeto:

  Estar com a API do projeto em execução:
  
  - Link com instruções: https://github.com/vinic-asouza/barberapp-api.git

  Clonar o repositório:
  
    $ git clone https://github.com/vinic-asouza/barberapp-web

  Acessar diretório:
    
    $ cd barberapp-web

  Instalar dependencias:
  
    $ yarn install

  Rodar:
  
    $ yarn start
