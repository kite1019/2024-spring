import { css } from 'styled-components';

export const media = {
desktop: (...args) => css`
    @media (min-width: 1024px) {
        ${css(...args)}
    }
`,
tablet: (...args) => css`
    @media (min-width: 768px) {
        ${css(...args)}
    }
`,
phone: (...args) => css`
    @media (max-width: 767px) {
        ${css(...args)}
    }
`,
};
