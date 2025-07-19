import { Html, Head, Main, NextScript } from 'next/document'


const Document = () => (
  <Html lang="en">
    <Head>

    </Head>
    <body className="font-main antialiased overflow-x-hidden">
      <Main />
      <div id="modal-portal" />
      <NextScript />
    </body>
  </Html>
)

export default Document
