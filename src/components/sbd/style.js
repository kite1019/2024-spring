import styled from 'styled-components';

export const SbdWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    column-gap: 0.625rem;
    ul {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.625rem;
    }
    .big {
        aspect-ratio: calc(300 / 420);
        overflow: hidden;
    }
    .pd-box {
        a {
            display: block;
            background-color: #fff;
        }
    }
`;
