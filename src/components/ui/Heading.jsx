import React from 'react';

const Heading = ({ contactText, paddingTop, paddingRight, paddingBottom, paddingLeft, border, borderRadius, backgroundColor, fontFamily, fontSize, fontVariant, letterSpacing, color, mixBlendMode }) => {

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
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                    fontVariant: fontVariant,
                    letterSpacing: letterSpacing,
                    color: color,
                    mixBlendMode: mixBlendMode,
                }}
                >
                    {contactText}
                </p>
            </section>
        </>
    );
};

export default Heading;
