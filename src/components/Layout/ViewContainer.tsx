import React, { ReactFragment, ReactInstance } from 'react';
import styled from '@emotion/styled';

export const ViewContainer = ({ children }: any) => {
    return (
        <Section>
            {children}
        </Section>
    );
};

const Section = styled.section`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 360px;
    height: 90vh;
    border-radius: 15px;
    border: 1px solid black;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%);
    overflow: hidden;
`;


export default ViewContainer;