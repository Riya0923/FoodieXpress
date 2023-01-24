import Layout from "../components/Layout";
import '../styles/globals.css';


function MyApp({ Component, pageProps })  {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  );
}
//Adding a comment

export default MyApp;