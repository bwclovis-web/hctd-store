import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en">
    <Head>
      <link
        href="https://fonts.googleapis.com"
        rel="preconnect"
      />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Chicle&family=Libre+Franklin&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="overflow-x-hidden">
      <Main />
      <div id="modal-portal" />
      <NextScript />
    </body>
  </Html>
)

export default Document
