import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../components/theme';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            href="https://fonts.googleapis.com/css?family=Baloo|DM+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <React.Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    )
  };
};

export default MyDocument;
