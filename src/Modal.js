import React, { Component } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { TweenLite } from "gsap/TweenMax";

const duration = 200;

class Modal extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      TweenLite.to(this.myElement, 0.35, { y: 30, scale: 1 });
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      TweenLite.to(this.myElement, 0.35, { y: -30, scale: 0.7 });
    }
  }

  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    const { isOpen } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={{ enter: 0, exit: duration }}
        appear
        unmountOnExit
      >
        {tstate => (
          <Overlay tstate={tstate} onClick={this.closeModal}>
            <ModalWrapper ref={div => (this.myElement = div)}>
              {this.props.children}
            </ModalWrapper>
          </Overlay>
        )}
      </Transition>
    );
  }
}

export default Modal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.tstate === "entered" ? 1 : 0)};
  transition: opacity ${duration}ms ease-in-out;
`;

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  margin: 30px auto;
  transform: scale(0.8);
  width: 300px;
  color: white;
  padding: 20px;
  height: 200px;
  border-radius: 20px;
`;
