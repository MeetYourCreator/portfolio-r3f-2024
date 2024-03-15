import React from 'react';

const TVCaption = ({ tvCaption }) => {

  return (
    <>
      <section style={{
        marginTop: '10%',
        marginRight: '25%',
        marginLeft: '25%',
        // border: 'black 3px solid'
      }}>
        <p style={{
          fontSize: '.9rem',
          // letterSpacing: 1.5,
          lineHeight: 1.5,
          textAlign: 'justify',
          textJustify: 'inter-word',
          color: 'white',

        }}>
          {tvCaption}
        </p>
      </section>
    </>
  );
};

export default TVCaption;
