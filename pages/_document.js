import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="/css/swiper-bundle.min.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/swiper-bundle.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
