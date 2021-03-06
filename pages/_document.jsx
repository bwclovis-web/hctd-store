import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
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
        <body>
          <Main />
          <div id="modal-portal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument