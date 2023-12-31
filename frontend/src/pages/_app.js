import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Layout/Navbar";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <NextNProgress
        color="#263238"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
      <Toaster />
    </SessionProvider>
  );
}
