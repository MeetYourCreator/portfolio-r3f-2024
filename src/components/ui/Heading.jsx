import React from 'react';

const Heading = () => {

    return (
        <>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: 'fit-content',
                minWidth: 170,
                height: 'fit-content',
                minHeight: 100,
                padding: '0 6px 7px 6px',
                border: '#7AF8FF 3px solid',
                borderRadius: 10,
                backgroundColor: '#e5e5e5'
            }}>
                <p style={{
                    fontFamily: 'Allerta',
                    fontSize: '7vw',
                    fontVariant: 'small-caps',
                    color: '#000000',
                }}
                >
                    Projects
                </p>
                <p style={{
                    fontFamily: 'Allerta',
                    fontSize: '2vw',
                    fontVariant: 'small-caps',
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
