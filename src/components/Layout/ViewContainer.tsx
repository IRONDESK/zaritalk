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
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 15px;
    @media (max-width: 640px) {
        width: 100%;
        height: 100%;
        box-shadow: none;
        border-radius: 0;
    }
`;


export default ViewContainer;