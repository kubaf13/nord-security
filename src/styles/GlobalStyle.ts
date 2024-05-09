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
    
    
    
    main {
        //background: #F2F2F2;
    }
    
    h2 {
        font-size: 40px;
        font-weight: bold;
        color: ${({ theme }) => theme.palette.accent};
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

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: opacity 300ms ease-out;
    }

    .page-container {
        position: relative;
    }
`;

export default GlobalStyle;
