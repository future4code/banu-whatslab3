/* eslint-disable no-unused-vars */
import React from 'react';
import styled from "styled-components";
import './App.css'

const ContainerWhats = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35vw;
  height: auto;
  margin: 20px auto;
  border: solid 1px #7e7e7e;
  position: relative;

  

 
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   
  .sendButton {
    width: 20%;
    padding: 0;
    height:20px;
  }
  `;

const Input1 = styled.input`
  width: 22%;
  padding:5px;

`;
const Input2 = styled.input`
  width: 68%;
  padding: 5px;

`;

const Img = styled.img`
  width:100%;
  height:45vw;
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
            <button className="sendButton" onClick={this.onClickEnviar}>Enviar</button>
          </BoxContainer>
        </ContainerWhats>
      </div>
    );
  }
}

export default ContainerWhatsUser;



