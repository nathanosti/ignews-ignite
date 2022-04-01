import { Html, Head, NextScript, Main } from "next/document";
import { Header } from "../components/Header";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Header />
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
