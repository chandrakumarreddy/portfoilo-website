require("es6-promise").polyfill();
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-us">
        <Head>
          <meta charSet="utf-8" />
          <meta name="portfolio" description="portfolio website" />
          <meta name="robots" content="noindex,nofollow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
