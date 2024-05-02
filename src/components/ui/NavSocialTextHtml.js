import React from 'react';
import { Html } from '@react-three/drei';

const NavSocialTextHtml = ({ text, link, xPosCaption, yPosCaption, zPosCaption }) => {

  return (
    <>
      <Html
        position={[xPosCaption, yPosCaption, zPosCaption]}
      >
        <section style={{
          position: 'fixed',
          marginTop: '10%',
          marginRight: '25%',
          marginLeft: '25%',
          backgroundColor: 'transparent'
        }}>
          <p style={{
            fontFamily: 'Allerta',
            fontSize: '.9rem',
            lineHeight: 1.5,
            textAlign: 'justify',
            textJustify: 'inter-word',
            hyphens: 'auto',
            color: 'white',
          }}
          >
            <a
              href={link}
              target='_blank'
              style={{
                textDecoration: 'none',
                color: '#ffffff'
              }} rel="noreferrer"
            >
              {text}
            </a>
          </p>
        </section>
      </Html>
    </>
  );
};


export default NavSocialTextHtml;;
