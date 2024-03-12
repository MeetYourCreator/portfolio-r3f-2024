import React from 'react';

const TVCaption = ({ tvCaption }) => {

  return (
    <>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: 'black 3px solid'
      }}>
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '.75rem',
          letterSpacing: 1.5,
          lineHeight: 1.5,
          textAlign: 'left',
          color: 'white',
          marginRight: '90px',
          marginLeft: '90px'
        }}>
          {tvCaption}
        </p>
      </section>
    </>
  );
};

export default TVCaption;
