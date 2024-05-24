import React from 'react';
import { Html } from '@react-three/drei';

const NavSocialTextHtml = ({
  text,
  link,
  xPosCaption,
  yPosCaption,
  zPosCaption
}) => {

  return (
    <>
      <Html
        position={[xPosCaption, yPosCaption, zPosCaption]}
      >
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <p style={{
            // fontFamily: 'Allerta',
            fontSize: '2vh',
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
