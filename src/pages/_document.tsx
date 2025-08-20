import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='format-detection' content='telephone=no' />
        <meta name='format-detection' content='email=no' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
