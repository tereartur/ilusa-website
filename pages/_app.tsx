import React from 'react';

import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/markdown.css';

function App({ Component, pageProps }) {
  return (
    <div className="font-sans antialiased text-gray-900 flex flex-col h-screen">
        <Component {...pageProps} />
    </div>
  );
}

export default App;
