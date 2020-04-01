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
      font-style: italic;
      font-weight: 400;
      src: url('/static/fonts/inter-3.9/Inter-Italic.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-Italic.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      src: url('/static/fonts/inter-3.9/Inter-Medium.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-Medium.woff') format('woff');
    }
    @font-face {
      font-family: 'Inter';
      font-style: italic;
      font-weight: 500;
      src: url('/static/fonts/inter-3.9/Inter-MediumItalic.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-MediumItalic.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      src: url('/static/fonts/inter-3.9/Inter-SemiBold.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-SemiBold.woff') format('woff');
    }
    @font-face {
      font-family: 'Inter';
      font-style: italic;
      font-weight: 600;
      src: url('/static/fonts/inter-3.9/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-SemiBoldItalic.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      src: url('/static/fonts/inter-3.9/Inter-Bold.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-Bold.woff') format('woff');
    }
    @font-face {
      font-family: 'Inter';
      font-style: italic;
      font-weight: 700;
      src: url('/static/fonts/inter-3.9/Inter-BoldItalic.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-BoldItalic.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      src: url('/static/fonts/inter-3.9/Inter-Black.woff2') format('woff2'),
        url('/static/fonts/inter-3.9/Inter-Black.woff') format('woff');
    }
    
    /* --------------------------------------------------------------------------
    [EXPERIMENTAL] Multi-axis, single variable font.
    
    Slant axis is not yet widely supported (as of February 2019) and thus this
    multi-axis single variable font is opt-in rather than the default.
    
    When using this, you will probably need to set font-variation-settings
    explicitly, e.g.
    
      * { font-variation-settings: "slnt" 0deg }
      .italic { font-variation-settings: "slnt" 10deg }
    
    */
    @font-face {
      font-family: 'Inter var experimental';
      font-weight: 100 900;
      font-style: oblique 0deg 10deg;
      src: url('/static/fonts/inter-3.9/Inter.var.woff2') format('woff2');
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
