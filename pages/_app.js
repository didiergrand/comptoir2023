import '@component/styles/wordpressNative.css'
import '@component/styles/fonts.css'
import '@component/styles/globals.css'
import '@component/styles/styles.css'
import '@component/styles/header.css'
import '@component/styles/footer.css'
import '@component/styles/pages/homepage.css'
import '@component/styles/pages/comite-direction.css'
import '@component/styles/pages/programme.scss'
import '@component/styles/footer.css'

// import the Head component for appending elements to the head of the page
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}