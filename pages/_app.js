import App from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = (appContext) => App.getInitialProps(appContext);

export default MyApp;
