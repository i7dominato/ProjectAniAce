import "../styles/global.css";

export default function App({ Component, pageProps }) {
  try {
    return <Component {...pageProps} />;
  } catch {
    return <div>Erro no sistema</div>;
  }
}