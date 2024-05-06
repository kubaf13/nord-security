import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.cairo};
        font-weight: 400;
    }

    ul, ol {
        list-style: none;
    }
    
    button {
        outline: 0;
        padding: 5px 20px 5px;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;

        @media ${({ theme }) => theme.media.tablet} {
            padding: 13px 50px 13px;
        }
    }
`;

export default GlobalStyle;
