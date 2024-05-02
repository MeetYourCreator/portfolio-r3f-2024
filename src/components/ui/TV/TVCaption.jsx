import React from 'react';

const TVCaption = ({ tvCaption }) => {


  return (
    <>
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
          {tvCaption}
        </p>
      </section>
    </>
  );
};

export default TVCaption;
