import React from 'react';

const Heading = () => {

    return (
        <>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: 170,
                height: 100,
                border: '#7AF8FF 3px solid',
                borderRadius: 10,
                backgroundColor: '#e5e5e5'
            }}>
                <p style={{
                    fontFamily: 'Allerta',
                    fontSize: '29px',
                    fontVariant: 'small-caps',
                    // fontVariant: '.15rem',
                    color: '#000000',
                }}
                >
                    Projects
                </p>
                <p style={{
                    fontFamily: 'Allerta',
                    fontSize: '15px',
                    fontVariant: 'small-caps',
                    // fontVariant: '.15rem',
                    color: '#000000',
                }}
                >
                    Rami Zackary Shamir
                </p>
            </section>
        </>
    );
};

export default Heading;
