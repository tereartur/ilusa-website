import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {Reset} from 'styled-reset';
import {theme} from 'styles/theme';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      src: url('/static/fonts/inter-3.9/Inter-Regular.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-Regular.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      src: url('/static/fonts/inter-3.9/Inter-Black.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-Black.woff') format('woff');
    }

    html {
        box-sizing: border-box;
    }
  
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        line-height: 1.5;
        color: #1a202c;
        height: 100vh;
        margin: 0;
    }
  
    img, video {
        max-width: 100%;
        height: auto;
    }
    
    *, :after, :before {
        box-sizing: inherit;
    }
`;

function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Reset />
                <GlobalStyle />
                <Component {...pageProps} />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
