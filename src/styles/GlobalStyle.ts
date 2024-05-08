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
        background: none;
        border: none;
        outline: 0;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }
`;

export default GlobalStyle;
