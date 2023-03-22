import React from "react"
import styled from "styled-components"

import Modal from "./Modal"

class App extends React.Component {
  state = {
    modalOpen: false
  }

  handleButtonClick = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleButtonClick} type="button">
          Open Modal
        </Button>

        <Modal isOpen={this.state.modalOpen} closeModal={this.closeModal}>
          <ModalContent>I'm the Modal!</ModalContent>
        </Modal>
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  height: 100vh;
  background: url("https://uploads.codesandbox.io/uploads/user/a944074b-939d-4c57-9a82-473da913e6c9/mj-a-casey-horner-1392391-unsplash.jpg")
    no-repeat center center fixed;
  background-size: cover;
  padding: 30px;
  overflow: hidden;
`

const Button = styled.button`
  display: block;
  margin: 50px auto;
  background-color: #e84d42;
  border: none;
  padding: 20px 60px;
  border-radius: 30px;
  color: white;
  transition: background-color 250ms;

  &:hover {
    background-color: #c3352a;
  }
`

const ModalContent = styled.div``
