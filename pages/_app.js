import "../styles/globals.css";
import "../public/fonts/fonts.css";

import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const pages = ['/', '/about', '/work', '/testimonials', '/contact']; // Liste des URLs de vos pages

function MyApp({ Component, pageProps }) {



  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
