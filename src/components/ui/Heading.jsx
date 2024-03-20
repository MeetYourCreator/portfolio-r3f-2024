import React from 'react';
import { Html, Text } from '@react-three/drei';

const Heading = ({ contactText, paddingTop, paddingRight, paddingBottom, paddingLeft, border, borderRadius, backgroundColor }) => {

    return (
        <>
            <section style={{
                width: 'fit-content',
                paddingTop: paddingTop,
                paddingRight: paddingRight,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                border: border,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor
            }}>
                <p style={{
                    fontFamily: 'Raleway Dots',
                    fontSize: '1rem',
                    fontVariant: 'small-caps',
                    letterSpacing: '.15rem',
                    color: 'gold',
                    mixBlendMode: 'screen',
                }}
                >
                    {contactText}
                </p>
            </section>
        </>
    );
};

export default Heading;
