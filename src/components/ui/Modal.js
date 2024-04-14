import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import '../../styles.css';

const Modal = () => {

  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef();
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <section
        className='modal'
      >
        <article
          className='overlay'
        // onClick={toggleModal}
        >
          <h1>Hello</h1>
        </article>
      </section>
    </>
  );
};
export default Modal;
