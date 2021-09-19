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

`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   
  .sendButton {
    width: 20%;
    padding: 0;
    height:20px;
  }
  `

const Input1 = styled.input`
  width: 22%;
  padding:5px;

`
const Input2 = styled.input`
  width: 68%;
  padding: 5px;

`

const Img = styled.img`
  width:100%;
  height:45vw;
`

const MessagesContainer = styled.div`
  flex-grow:1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

class ContainerWhatsUser extends React.Component {
  state = {
    messages: [],
    userValue : '',
    messageValue : ''
  }


  onChangeUserValue = (e) => {
    this.setState({userValue: e.target.value})
  }

  onChangeMessageValue = (e) => {
    this.setState({messageValue: e.target.value})
  }


  sendMessage = () => {
    const newMessage  ={
       user: this.state.userValue ,
       text: this.state.messageValue
    }
    const newMessagesArray = [newMessage,...this.state.messages]

    this.setState({messages: newMessagesArray, messageValue: ''})
  }

  render() {
    return (
      <div>
        <ContainerWhats>
          <Img src="bg-chat-tile-light.png"/> 
          <MessagesContainer>
          {this.state.messages.map((message,index) => {
            return <p key={index}> <strong>{message.user}</strong>: {message.text} </p>
          })}
          </MessagesContainer>
          <BoxContainer>
            <Input1
                onChange={this.onChangeUserValue} 
                value={this.state.userValue} 
                placeholder="Nome"
            />
            <Input2
              onChange={this.onChangeMessageValue} 
              value={this.state.messageValue} 
              placeholder="Mensagem"
            />
            <button className="sendButton" onClick={this.sendMessage}>Enviar</button>
          </BoxContainer>
        </ContainerWhats>
      </div>
    );
  }
}

export default ContainerWhatsUser;



