/* eslint-disable no-unused-vars */
import React from 'react';
import styled from "styled-components";
import './App.css'

const ContainerWhats = styled.div`
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  border: solid 1px #7e7e7e;
  position: relative;
  max-width: 600px;
  height: 100vw;
  height: 623px;
  margin-left: calc(50% - 300px);
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -22px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Input1 = styled.input`
  width: 22%;
`;
const Input2 = styled.input`
  width: 88%;
`;

const Img = styled.img`
    min-width: 100%;
    max-height: 97%;
    margin-top: -17px;

`;

class ContainerWhatsUser extends React.Component {
  state = {
    usuario: '',
    mensagem: ''
  };

  onChangeUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  };

  onClickEnviar = () => {};

  render() {
    console.log(this.state);
    return (
      <div>
        <ContainerWhats>
          <Img src="bg-chat-tile-light.png"/> 
          <p>{this.state.nome}</p>
          <p>{this.state.numero} </p>
          <BoxContainer>
            <Input1
              placeholder={"Usuário"}
              value={this.state.nome}
              onChange={this.onChangeNome}
            />
            <Input2
              placeholder={"Mensagem"}
              value={this.state.numero}
              onChange={this.onChangeNumero}
            />
            <button onClick={this.onClickEnviar}>Enviar</button>
          </BoxContainer>
        </ContainerWhats>
      </div>
    );
  }
}

export default ContainerWhatsUser;



