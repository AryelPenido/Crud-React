import React, { Component } from 'react';

import Main from '../template/Main';

const headerProps = {
    incon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
               Cadastro de  Usuario
            </Main>
        )
    }
}