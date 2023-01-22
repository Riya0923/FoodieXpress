import Layout from "../components/Layout";
import '../styles/globals.css';


function MyApp({ Component, pageProps })  {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  );
}
//ADDED A COMMENT LINE

export default MyApp;