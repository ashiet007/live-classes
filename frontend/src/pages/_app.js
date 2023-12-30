import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

